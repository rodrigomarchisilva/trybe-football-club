import { ClubMatches, LeaderboardRow } from '../interfaces';
import Match from '../models/Match';

const results = (homeMatches: Match[], awayMatches: Match[]) => {
  const output = {} as { total: number, victories: number, losses: number, draws: number };
  output.total = homeMatches.length + awayMatches.length;
  output.victories = (
    homeMatches.filter((match) => match.homeTeamGoals > match.awayTeamGoals).length
    + awayMatches.filter((match) => match.awayTeamGoals > match.homeTeamGoals).length);
  output.losses = (
    homeMatches.filter((match) => match.homeTeamGoals < match.awayTeamGoals).length
    + awayMatches.filter((match) => match.awayTeamGoals < match.homeTeamGoals).length);
  output.draws = output.total - output.victories - output.losses;
  return output;
};

const goals = (homeMatches: Match[], awayMatches: Match[]) => {
  const output = {} as { favor: number, own: number, balance: number };
  output.favor = (
    homeMatches.reduce((acc, match) => acc + match.homeTeamGoals, 0)
    + awayMatches.reduce((acc, match) => acc + match.awayTeamGoals, 0));
  output.own = (
    homeMatches.reduce((acc, match) => acc + match.awayTeamGoals, 0)
    + awayMatches.reduce((acc, match) => acc + match.homeTeamGoals, 0));
  output.balance = output.favor - output.own;
  return output;
};

const sortLeaderbord = (unsortedLeaderbord: LeaderboardRow[]) => (
  unsortedLeaderbord.sort((a, b) => (
    b.totalPoints - a.totalPoints
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || a.goalsOwn - b.goalsOwn
  ))
);

const calculateEfficiency = (totalPoints: number, totalGames: number) => {
  const efficiency = (totalPoints / (totalGames * 3)) * 100;
  return +(`${Math.round(+(`${efficiency}e+2`))}e-2`);
};

export default function generateLeaderboard(clubs: ClubMatches[]): LeaderboardRow[] {
  const unsortedLeaderbord: LeaderboardRow[] = clubs.map((club) => {
    const { total, victories, losses, draws } = results(club.homeMatches, club.awayMatches);
    const { favor, own, balance } = goals(club.homeMatches, club.awayMatches);
    const row = {} as LeaderboardRow;
    row.name = club.clubName;
    row.totalPoints = (victories * 3) + draws;
    row.totalGames = total;
    row.totalVictories = victories;
    row.totalDraws = draws;
    row.totalLosses = losses;
    row.goalsFavor = favor;
    row.goalsOwn = own;
    row.goalsBalance = balance;
    row.efficiency = calculateEfficiency(row.totalPoints, row.totalGames);
    return row;
  });
  return sortLeaderbord(unsortedLeaderbord);
}

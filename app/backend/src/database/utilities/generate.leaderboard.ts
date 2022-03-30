import { ClubMatches, LeaderboardRow } from '../interfaces';
import Match from '../models/Match';

interface Results {
  homeTotal: number;
  awayTotal: number;
  total: number;
  homeVictories: number;
  awayVictories: number;
  victories: number;
  homeLosses: number;
  awayLosses: number;
  losses: number;
  homeDraws: number;
  awayDraws: number;
  draws: number;
}

interface Goals {
  homeFavor: number;
  homeOwn: number;
  homeBalance: number;
  awayFavor: number;
  awayOwn: number;
  awayBalance: number;
  favor: number;
  own: number;
  balance: number;
}

const results = (homeMatches: Match[], awayMatches: Match[]) => {
  const output = {} as Results;
  output.homeTotal = homeMatches.length;
  output.awayTotal = awayMatches.length;
  output.total = homeMatches.length + awayMatches.length;
  output.homeVictories = homeMatches.filter((hm) => hm.homeTeamGoals > hm.awayTeamGoals).length;
  output.awayVictories = awayMatches.filter((am) => am.awayTeamGoals > am.homeTeamGoals).length;
  output.victories = output.homeVictories + output.awayVictories;
  output.homeLosses = homeMatches.filter((hm) => hm.homeTeamGoals < hm.awayTeamGoals).length;
  output.awayLosses = awayMatches.filter((am) => am.awayTeamGoals < am.homeTeamGoals).length;
  output.losses = output.homeLosses + output.awayLosses;
  output.homeDraws = output.homeTotal - output.homeVictories - output.homeLosses;
  output.awayDraws = output.awayTotal - output.awayVictories - output.awayLosses;
  output.draws = output.homeDraws + output.awayDraws;
  return output;
};

const goals = (homeMatches: Match[], awayMatches: Match[]) => {
  const output = {} as Goals;
  output.homeFavor = homeMatches.reduce((acc, hm) => acc + hm.homeTeamGoals, 0);
  output.awayFavor = awayMatches.reduce((acc, am) => acc + am.awayTeamGoals, 0);
  output.favor = output.homeFavor + output.awayFavor;
  output.homeOwn = homeMatches.reduce((acc, hm) => acc + hm.awayTeamGoals, 0);
  output.awayOwn = awayMatches.reduce((acc, am) => acc + am.homeTeamGoals, 0);
  output.own = output.homeOwn + output.awayOwn;
  output.homeBalance = output.homeFavor - output.homeOwn;
  output.awayBalance = output.awayFavor - output.awayOwn;
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

const defaultLeaderboard = (club: ClubMatches) => {
  const { homeMatches, awayMatches, clubName } = club;
  const { total, victories, losses, draws } = results(homeMatches, awayMatches);
  const { favor, own, balance } = goals(homeMatches, awayMatches);
  const output = {} as LeaderboardRow;
  output.name = clubName;
  output.totalPoints = (victories * 3) + draws;
  output.totalGames = total;
  output.totalVictories = victories;
  output.totalDraws = draws;
  output.totalLosses = losses;
  output.goalsFavor = favor;
  output.goalsOwn = own;
  output.goalsBalance = balance;
  output.efficiency = calculateEfficiency(output.totalPoints, output.totalGames);
  return output;
};

const homeLeaderboard = (club: ClubMatches) => {
  const { homeMatches, awayMatches, clubName } = club;
  const { homeTotal, homeVictories, homeLosses, homeDraws } = results(homeMatches, awayMatches);
  const { homeFavor, homeOwn, homeBalance } = goals(homeMatches, awayMatches);
  const output = {} as LeaderboardRow;
  output.name = clubName;
  output.totalPoints = (homeVictories * 3) + homeDraws;
  output.totalGames = homeTotal;
  output.totalVictories = homeVictories;
  output.totalDraws = homeDraws;
  output.totalLosses = homeLosses;
  output.goalsFavor = homeFavor;
  output.goalsOwn = homeOwn;
  output.goalsBalance = homeBalance;
  output.efficiency = calculateEfficiency(output.totalPoints, output.totalGames);
  return output;
};

const awayLeaderboard = (club: ClubMatches) => {
  const { homeMatches, awayMatches, clubName } = club;
  const { awayTotal, awayVictories, awayLosses, awayDraws } = results(homeMatches, awayMatches);
  const { awayFavor, awayOwn, awayBalance } = goals(homeMatches, awayMatches);
  const output = {} as LeaderboardRow;
  output.name = clubName;
  output.totalPoints = (awayVictories * 3) + awayDraws;
  output.totalGames = awayTotal;
  output.totalVictories = awayVictories;
  output.totalDraws = awayDraws;
  output.totalLosses = awayLosses;
  output.goalsFavor = awayFavor;
  output.goalsOwn = awayOwn;
  output.goalsBalance = awayBalance;
  output.efficiency = calculateEfficiency(output.totalPoints, output.totalGames);
  return output;
};

export default function generateLeaderboard(clubs: ClubMatches[], type: string): LeaderboardRow[] {
  const unsortedLeaderbord: LeaderboardRow[] = clubs.map((club) => {
    switch (type) {
      case 'home':
        return homeLeaderboard(club);
      case 'away':
        return awayLeaderboard(club);
      default:
        return defaultLeaderboard(club);
    }
  });
  return sortLeaderbord(unsortedLeaderbord);
}

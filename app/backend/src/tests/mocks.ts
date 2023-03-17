import MatchWithClubNames from '../database/models/MatchWithClubNames';
import { LeaderboardRow } from '../database/interfaces';
import Club from '../database/models/Club';
import ClubWithMatches from '../database/models/ClubWithMatches';

const club1 = new Club();
club1.id = 1;
club1.clubName = 'Club 1';

const club2 = new Club();
club2.id = 2;
club2.clubName = 'Club 2';

export const databaseClubs: Club[] = [club1, club2];

export const responseClubs: {}[] = [{ id: 1, clubName: 'Club 1' }, { id: 2, clubName: 'Club 2' }];

//---------------------------------------------------------------------------------------------------

export const responseDefaultLeaderboard: LeaderboardRow[] = [
  {
    efficiency: 50,
    goalsBalance: 0,
    goalsFavor: 3,
    goalsOwn: 3,
    name: 'club1',
    totalDraws: 0,
    totalGames: 2,
    totalLosses: 1,
    totalPoints: 3,
    totalVictories: 1
  },
  {
    efficiency: 50,
    goalsBalance: 0,
    goalsFavor: 3,
    goalsOwn: 3,
    name: 'club2',
    totalDraws: 0,
    totalGames: 2,
    totalLosses: 1,
    totalPoints: 3,
    totalVictories: 1
  },
];

export const responseHomeLeaderboard: LeaderboardRow[] = [
  {
    name: 'club1',
    totalPoints: 3,
    totalGames: 2,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 3,
    goalsOwn: 3,
    goalsBalance: 0,
    efficiency: 50
  },
  {
    name: 'club2',
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: 0
  }
];

export const responseAwayLeaderboard: LeaderboardRow[] = [
  {
    name: 'club2',
    totalPoints: 3,
    totalGames: 2,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 3,
    goalsOwn: 3,
    goalsBalance: 0,
    efficiency: 50
  },
  {
    name: 'club1',
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: 0
  }
];

//---------------------------------------------------------------------------------------------------

const matchWithClubNames1 = new MatchWithClubNames({
  id: 1,
  homeTeam: 2,
  homeTeamGoals: 2,
  awayTeam: 1,
  awayTeamGoals: 1,
  inProgress: false,
  homeClub: { clubName: 'club2' },
  awayClub: { clubName: 'club1' },
});

const matchWithClubNames2 = new MatchWithClubNames({
  id: 2,
  homeTeam: 1,
  homeTeamGoals: 1,
  awayTeam: 2,
  awayTeamGoals: 2,
  inProgress: true,
  homeClub: { clubName: 'club1' },
  awayClub: { clubName: 'club2' },
});

export const databaseMatchesWithClubNames: MatchWithClubNames[] = [matchWithClubNames1, matchWithClubNames2];

export const responseMatchesWithClubNames: {}[] = [
  { id: 1, homeTeam: 2, homeTeamGoals: 2, awayTeam: 1, awayTeamGoals: 1, inProgress: false, homeClub: { clubName: 'club2' }, awayClub: { clubName: 'club1' } },
  { id: 2, homeTeam: 1, homeTeamGoals: 1, awayTeam: 2, awayTeamGoals: 2, inProgress: true, homeClub: { clubName: 'club1' }, awayClub: { clubName: 'club2' } },
];

//---------------------------------------------------------------------------------------------------

const ClubWithMatches1 = new ClubWithMatches({
  id: 1,
  clubName: 'club1',
  homeMatches: [
    {
      id: 1,
      homeTeam: 2,
      homeTeamGoals: 2,
      awayTeam: 1,
      awayTeamGoals: 1,
      inProgress: false,
      homeClub: { clubName: 'club2' },
      awayClub: { clubName: 'club1' },
    },
    {
      id: 2,
      homeTeam: 1,
      homeTeamGoals: 1,
      awayTeam: 2,
      awayTeamGoals: 2,
      inProgress: true,
      homeClub: { clubName: 'club1' },
      awayClub: { clubName: 'club2' },
    },
  ],
  awayMatches: [],
});

const ClubWithMatches2 = new ClubWithMatches({
  id: 2,
  clubName: 'club2',
  homeMatches: [],
  awayMatches: [
    {
      id: 1,
      homeTeam: 2,
      homeTeamGoals: 2,
      awayTeam: 1,
      awayTeamGoals: 1,
      inProgress: false,
      homeClub: { clubName: 'club2' },
      awayClub: { clubName: 'club1' },
    },
    {
      id: 2,
      homeTeam: 1,
      homeTeamGoals: 1,
      awayTeam: 2,
      awayTeamGoals: 2,
      inProgress: true,
      homeClub: { clubName: 'club1' },
      awayClub: { clubName: 'club2' },
    },
  ],
});

export const databaseClubsWithMatches: ClubWithMatches[] = [ClubWithMatches1, ClubWithMatches2];

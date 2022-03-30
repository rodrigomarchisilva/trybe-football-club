import Match from '../models/Match';

export default interface MatchInfo extends Match {
  homeClub: {
    clubName: string
  },
  awayClub: {
    clubName: string
  }
}

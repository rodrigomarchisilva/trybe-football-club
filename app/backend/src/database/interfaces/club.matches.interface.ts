import Club from '../models/Club';
import Match from '../models/Match';

export default interface ClubMatches extends Club {
  homeMatches: Match[],
  awayMatches: Match[],
}

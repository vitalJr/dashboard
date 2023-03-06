import { IAffiliates } from '../models/affiliate';
import { GenericService } from './generic';

export class AffiliatesService extends GenericService<IAffiliates> {
  constructor() {
    super('affiliates');
  }
}

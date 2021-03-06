/**
 *
 * EditPage selectors
 *
 */

import { createSelector } from 'reselect';

/**
* Direct selector to the listPage state domain
*/
const selectEditPageDomain = () => state => state.get('editPage');


/**
 * Default selector used by EditPage
 */

const makeSelectEditPage = () => createSelector(
  selectEditPageDomain(),
  (substate) => substate.toJS()
);

/**
 *
 * Other specific selectors
 */
const makeSelectIsCreating = () => createSelector(
  selectEditPageDomain(),
  (substate) => substate.get('isCreating'),
);

const makeSelectModelName = () => createSelector(
  selectEditPageDomain(),
  (substate) => substate.get('modelName'),
);

const makeSelectRecord = () => createSelector(
  selectEditPageDomain(),
  (substate) => substate.get('record'),
);

const makeSelectSource = () => createSelector(
  selectEditPageDomain(),
  (substate) => substate.get('source'),
);

export default makeSelectEditPage;
export {
  makeSelectIsCreating,
  makeSelectModelName,
  makeSelectRecord,
  makeSelectSource,
  selectEditPageDomain,
};

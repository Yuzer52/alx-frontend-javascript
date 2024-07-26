import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  /**
  * allSettled creates a Promise that is resolved with an array of results
  * Takes in an array of Promises.
  */
  return Promise
    // Call the signUpUser() and uploadPhoto() functions
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    // When the promises are all settled it should return an array with the
    .then((results) => (
      results.map((out) => ({
        status: out.status,
        value: out.status === 'fulfilled' ? out.value : String(out.reason),
      }))
    ));
}

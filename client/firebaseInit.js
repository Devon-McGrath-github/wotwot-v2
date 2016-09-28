import firebase from 'firebase'
import R from 'ramda'

import { db } from './dbInit'

export const getPersonalitiesFromDB = (callback) => {
  db.ref('personalities/').on('value', (snapshot) => {
    console.log('getPersonalitiesFromDB snapshot');
    callback(R.values(snapshot.val()))
  })
}


// export const writeNewActivityToDB = (payload) => {
//   const newActivityKey = firebase.database().ref().child('activities/').push().key
//   const newActivity = {
//     title: payload.title,
//     subtitle: payload.subtitle,
//     description: payload.description,
//     activityStart: payload.activityStart,
//     activityEnd: payload.activityEnd,
//     formattedAddress: payload.formattedAddress,
//     numberRequired: payload.numberRequired,
//     tasks: payload.tasks,
//     activityId: newActivityKey,
//     activityCreatorId: payload.uid,
//     images: payload.images,
//     attendeeIds: payload.attendeeIds
//   }
//   const updates = {};
//   updates['activities/' + newActivityKey] = newActivity;
//   return firebase.database().ref().update(updates)
// }


// export const deleteActivityFromDB = (activity) => {
//   return firebase
//     .database()
//     .ref(`personalities/${personality.personalityId}`)
//     .remove()
// }

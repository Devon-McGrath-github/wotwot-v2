import firebase from 'firebase'
import R from 'ramda'

import { db } from './dbInit'

export const getPersonalitiesFromDB = (callback) => {
  db.ref('personalities/').on('value', (snapshot) => {
    callback(R.values(snapshot.val()))
  })
}

import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from './db'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        subjects: [],
        para: [],
        group: [],
        teacher: [],
        menuSecond: [],
    },
    mutations: {
        ...vuexfireMutations,
    },
    actions: {
        bindGroup: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('group', db.collection('groups'))
        }),
        bindPara: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('para', db.collection('para'))
        }),
        bindSubjects: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('subjects', db.collection('subjects'))
        }),
        bindTeacher: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('teacher', db.collection('teacher'))
        }),
        addNote: firestoreAction((context, payload) => {
            return db.collection('notes').add(payload)
        }),
        addTovarKraski: firestoreAction((context, payload) => {
            return db.collection('tovar').add(payload)
        }),
        deleteFromTovar: firestoreAction((context, payload) => {
            db.collection('tovar')
                .doc(payload)
                .delete()
        }),
        deleteNote: firestoreAction((context, payload) => {
            db.collection('notes')
                .doc(payload)
                .delete()
        }),
        updateNote: firestoreAction((context, payload) => {
            db.collection('notes')
                .doc(payload.id)
                .set(payload)
        }),
    }
})

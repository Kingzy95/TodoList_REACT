import { useState, useEffect } from "react";
import { firebase } from "../firebase";

const collatedTasksExist = () => {};

export const useTasks = seclectedProject => {
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId', '==', 'jliFXIwyAL3tzHMtzRbw');

        unsubscribe =
            seclectedProject && !collatedTasksExist(seclectedProject) ?
                (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
                : selectedProject === 'TODAY'
                ? (unsubscribe = unsubscribe.where(
                    'date',
                    '==',
                    moment().format('DD/MM/YYYY')
                ))
                : selectedProject === 'INBOX' || selectedProject === 0
                ? (unsubscribe = unsubscribe.where('date', '==', ''))
                : unsubscribe;
    }, [selectedProject])
}
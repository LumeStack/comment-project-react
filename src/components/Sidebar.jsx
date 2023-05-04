import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside data-qa="profile-box" className={styles.sidebar}>
            <img
                data-qa="profile-cover-img"
                className={styles.cover}
                src="https://images.unsplash.com/photo-1498671546682-94a232c26d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=20"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/henriquemanieri.png" />
                <strong data-qa="profile-user-name" >Henrique Many</strong>
                <span data-qa="profile-user-role" >QA Engineer</span>
            </div>

            <footer>
                <a data-qa="edit-profile-button" href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
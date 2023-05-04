import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }) {

    return (
        <img
            data-qa={`avatar-img- ${src}`}
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    )
}
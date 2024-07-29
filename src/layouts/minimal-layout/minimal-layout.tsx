import styles from './style.module.scss'
import React from 'react'
import { MinimalFooter } from './minimal-footer'
import { MinimalHeader } from './minimal-header'

type MinimalLayoutProps = React.PropsWithChildren

export const MinimalLayout = ({ children }: MinimalLayoutProps) => {
    return (
        <div className={styles['layout']}>
            <div className={styles['layout-header']}>
                <MinimalHeader />
            </div>
            <main className={styles['main-content']}>{children}</main>
            <div className={styles['layout-footer']}>
                <MinimalFooter />
            </div>
        </div>
    )
}

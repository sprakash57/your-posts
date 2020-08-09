import React from 'react'
import { CircularProgress } from '@material-ui/core'

type IProps = { loading: boolean, ntwkIssue: boolean }

const RenderContent: React.FC<IProps> = (props) => {
    if (props.loading) {
        return <CircularProgress />
    } else if (props.ntwkIssue) {
        return <p>You are not connected to network</p>
    } else {
        return <section>{props.children}</section>
    }
}

export default RenderContent;

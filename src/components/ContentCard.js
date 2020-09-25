import React from "react"
import {CardWrapper, P , H2} from "../elements"
import { Button } from "../components"

export const ContentCard = ({date, title, excerpt, slug}) => {
    return(
        <CardWrapper>
            <P size="xSmall" textAlign="center" margin="0 5rem 1rem 0" color="dark2">
                {date}
            </P>
            <H2 textAlig="center" margin="0 3 1rem 0">
                {title}
            </H2>
            <P size="small" textAlign="center" margin="0 1rem 1rem 1rem" color="dark2">
                {excerpt}
            </P>
            <Button href={slug}>Read More</Button>
        </CardWrapper>
    )
}
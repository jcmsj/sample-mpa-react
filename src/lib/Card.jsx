import { Card as MUICard } from "@mui/material";
import style from "./card.module.css"

export default function Card({children, ...props}) {
    return <MUICard 
        className={style.card} 
        style={{display:"flex", flexDirection:"column"}}
        {...props}
    >
        {children}
    </MUICard>
}
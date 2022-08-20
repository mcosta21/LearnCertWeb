import LBody from "@components/LBody";
import { Grid } from "@mui/material";
import { RouterKey, RouterKeys } from "@routes/routekeys";
import { SLink } from "./styles";

export default function ManagementPage(){

    const filteredRouters = RouterKeys
        .filter(x => x.key !== RouterKey.Management);

    return (
        <LBody>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    filteredRouters.map(route => (
                        <Grid 
                            item 
                            xs={3} 
                            key={route.key}
                        >
                            <SLink to={route.value}>
                                <h3>{route.key}</h3>
                                <span>{route.value}</span>
                            </SLink>
                        </Grid>
                    ))
                }
            </Grid>
            
        </LBody>
    )
}
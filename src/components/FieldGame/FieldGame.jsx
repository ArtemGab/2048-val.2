import { GridItem } from "../GridItem/GridItem";
import { Grid, GridRow, GridCell } from "./styles";

export default function FieldGame(props) {
    const {gridItems} = props;

    const getRow = row => {
        return row.map(cell => <GridCell key={cell.id}>
            {cell.value ? <GridItem count={cell.value}>{cell.value}</GridItem> : null}
        </GridCell>);
    }

    const getGrid = rows => {
        return rows.map(row => <GridRow>
            {getRow(row)}
        </GridRow>);
    }

    return <Grid>
        {getGrid(gridItems)}
    </Grid>;
}

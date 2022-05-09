import { Chart } from "react-google-charts"
import { StyledGraphic } from "./style"




export const CompChart = (props) => {

  const database2 = props.users && props.users.map((user, index) => {
    if(index === 0){
      return ["User", "Participation"]
    }
      return [`${user.name} ${user.lastName}`, user.participation]
  })

  const database = props.users && props.users.map((user, index) => {
    return [`${user.name} ${user.lastName}`, user.participation]
  })


const options = {
    title: "",
    legend: "none",
    is3D: false,
    pieHole: 0.4,
};

    return(
        <StyledGraphic>
          <Chart
                chartType="PieChart"
                data={[["Name", "Participation"],
                ...database]}
                options={options}
                width={"100%"}
                height={"100%"}
                padding={"0px"}
                backgroundColor={'red'}
              />
        </StyledGraphic>
    )
} 
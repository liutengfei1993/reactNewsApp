import React from "react";
import Pcheader from "./pc_header";
import Pcfooter from "./pc_footer";
import PcNewsHeader from "./pc_newscontainer";

export default class Pcindex extends React.Component{
  render() {
    return(
        <div>
          <Pcheader></Pcheader>
          <PcNewsHeader></PcNewsHeader>
          <Pcfooter></Pcfooter>
        </div>
    )
  }
}

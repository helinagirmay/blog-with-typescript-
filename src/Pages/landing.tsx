import styled from "styled-components";

import Layout, {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getFooter,
} from "@mui-treasury/layout";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ArcAppFooterDemo } from "../Shared/footer";

const Header = getHeader(styled);
const Footer = getFooter(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);

const scheme = Layout();

scheme.configureHeader((builder: any) => {
  builder.registerConfig("xs", {
    position: "sticky",
  });
});

scheme.configureEdgeSidebar((builder: any) => {
  builder
    .create("unique_id", { anchor: "right" })
    .registerTemporaryConfig("xs", {
      anchor: "rigth",
      collapsible: true,
      collapsedWidth: 64,
      width: "auto", // 'auto' is only valid for temporary variant
    });
});

export default function Landing() {
  return (
    <Root scheme={scheme}>
      <CssBaseline />
      <Header>
        <Toolbar>
          Header
          <SidebarTrigger sidebarId="unique_id" />
        </Toolbar>
      </Header>
      <DrawerSidebar sidebarId={"unique_id"}>
        sidebar id is required sidebar content
      </DrawerSidebar>
    </Root>
  );
}

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Button, Divider, Drawer, Typography, useMediaQuery, ListItem } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ChartBar as ChartBarIcon } from "../icons/chart-bar";
import { Cog as CogIcon } from "../icons/cog";
import { Lock as LockIcon } from "../icons/lock";
import { Selector as SelectorIcon } from "../icons/selector";
import { ShoppingBag as ShoppingBagIcon } from "../icons/shopping-bag";
import { User as UserIcon } from "../icons/user";
import { UserAdd as UserAddIcon } from "../icons/user-add";
import { Users as UsersIcon } from "../icons/users";
import BadgeIcon from "@mui/icons-material/Badge";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PersonIcon from "@mui/icons-material/Person";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimelineIcon from "@mui/icons-material/Timeline";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

import { Logo } from "./logo";
import { NavItem } from "./nav-item";

const items = [
  {
    href: "/",
    icon: <ChartBarIcon fontSize="small" />,
    title: "Admin Dashboard",
  },
  {
    href: "/employee-dashboard",
    icon: <BadgeIcon fontSize="small" />,
    title: "Employee Dashboard",
  },
  {
    href: "/clients",
    icon: <PeopleAltIcon fontSize="small" />,
    title: "Clients",
  },
  {
    href: "/projects",
    icon: <WorkspacesIcon fontSize="small" />,
    title: "Projects",
  },
  {
    href: "/tickets",
    icon: <ConfirmationNumberIcon fontSize="small" />,
    title: "Tickets",
  },
  {
    href: "/calendar",
    icon: <CalendarTodayIcon fontSize="small" />,
    title: "Calendar",
  },
  {
    href: "/summary",
    icon: <SummarizeIcon fontSize="small" />,
    title: "Summary",
  },
  {
    href: "/overview",
    icon: <TimelineIcon fontSize="small" />,
    title: "Overview",
  },
  {
    href: "/invoices",
    icon: <LoyaltyIcon fontSize="small" />,
    title: "Invoices",
  },
  {
    href: "/payments",
    icon: <PaymentsIcon fontSize="small" />,
    title: "Payments",
  },
  {
    href: "/expenses",
    icon: <PaymentsIcon fontSize="small" />,
    title: "Expenses",
  },
  {
    href: "/payroll-items",
    icon: <PaymentsIcon fontSize="small" />,
    title: "Payroll",
  },

  {
    href: "/personal",
    icon: <PersonIcon fontSize="small" />,
    title: "Personal",
  },
  {
    href: "/compensation",
    icon: <CogIcon fontSize="small" />,
    title: "Compensation",
  },
  {
    href: "/pay",
    icon: <PaymentsIcon fontSize="small" />,
    title: "Pay",
  },
  {
    href: "/employee-salary",
    icon: <PaymentsIcon fontSize="small" />,
    title: "Employee Salary",
  },
  {
    href: "/payslip",
    icon: <PaymentsIcon fontSize="small" />,
    title: "Pay Slip",
  },
  {
    href: "/time-off",
    icon: <AccessTimeIcon fontSize="small" />,
    title: "Time Off",
  },
  // {
  //   href: "/404",
  //   icon: <XCircleIcon fontSize="small" />,
  //   title: "Error",
  // },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const [settOpen, setSettOpen] = useState(false);
  const openSubSetting = () => {
    const subSettingElement = document.getElementById("SubSetts");
    subSettingElement && subSettingElement.classList.toggle("SubSetting");
    setSettOpen(true);
  };

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/" passHref>
              <a>
                <Logo
                  sx={{
                    height: 42,
                    width: 42,
                  }}
                />
              </a>
            </NextLink>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3,
          }}
        />
        {/* <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
          ))}
        </Box> */}
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
          ))}
          <ListItem
            disableGutters
            sx={{
              display: "flex",
              mb: 0.5,
              py: 0,
              px: 2,
            }}
            onClick={() => {
              openSubSetting();
              setSettOpen(!settOpen);
            }}
          >
            <Button
              component="a"
              startIcon={<CogIcon fontSize="small" />}
              disableRipple
              sx={{
                backgroundColor: settOpen && "rgba(255,255,255, 0.08)",
                borderRadius: 1,
                color: settOpen ? "secondary.main" : "neutral.300",
                fontWeight: settOpen && "fontWeightBold",
                justifyContent: "flex-start",
                px: 3,
                textAlign: "left",
                textTransform: "none",
                width: "100%",
                "& .MuiButton-startIcon": {
                  color: settOpen ? "secondary.main" : "neutral.400",
                },
                "&:hover": {
                  backgroundColor: "rgba(255,255,255, 0.08)",
                },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>Settings</Box>
              {settOpen ? <ArrowForwardIosIcon /> : <KeyboardArrowDownIcon />}
            </Button>
          </ListItem>
          {settOpen && (
            <div className="SubSetting" id="SubSetts">
              <NavItem
                key={"CourtSettings"}
                icon={<ArrowForwardIosIcon fontSize="small" />}
                href={"/courtSettings"}
                title={"Court Settings"}
              />
              <NavItem
                key={"ClubSettings"}
                icon={<ArrowForwardIosIcon fontSize="small" />}
                href={"/clubSettings"}
                title={"Club Settings"}
              />
              <NavItem
                key={"Payments"}
                icon={<ArrowForwardIosIcon fontSize="small" />}
                href={"/paymentsSettings"}
                title={"Payments"}
              />
            </div>
          )}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

import React, { useCallback, useMemo, useRef } from "react";
import {
  Action,
  BottomContainer,
  ContainerActions,
  ContainerApp,
  Divider,
  Header,
  Title,
} from "../styles/root";
import {
  ChartLine,
  ClockCounterClockwise,
  Plus,
  User,
} from "phosphor-react-native";
import { View } from "react-native";
import Listing from "../components/Listing";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

function Home({ navigation }) {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["40%", "50%", "60%"], []);

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);

  return (
    <ContainerApp>
      <Header>
        <Title color="#91908D" style={{ marginTop: "1000px" }}>
          Bem vindo, <Title color="#FFF">André</Title>{" "}
        </Title>
        <Divider />
        <Title color="#FFFF" height="bold">
          $ 4.500.00
          <Title color="#91908D" height="bold" size="12px">
            {" "}
            Saldo
          </Title>{" "}
        </Title>
      </Header>

      <ContainerActions>
        <Action>
          <ClockCounterClockwise size={24} color="white" />
        </Action>
        <Action>
          <ChartLine size={24} color="white" />
        </Action>
        <Action>
          <User size={24} color="white" />
        </Action>
        <Action onPress={() => navigation.navigate("Other")}>
          <Plus size={24} color="white" />
        </Action>
      </ContainerActions>

      {/* <BottomContainer>
        <Listing />
      </BottomContainer> */}

      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        style={{ padding: 18 }}
        backgroundStyle={{ backgroundColor: "#181818" }}
        handleIndicatorStyle={{ backgroundColor: "#FFF" }}
      >
        <BottomSheetScrollView
          contentContainerStyle={{ backgroundColor: "#181818" }}
        >
          {<Listing />}
        </BottomSheetScrollView>
      </BottomSheet>
    </ContainerApp>
  );
}

export default Home;

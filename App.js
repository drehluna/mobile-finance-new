import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import {
  Action,
  BottomContainer,
  ContainerActions,
  ContainerApp,
  Divider,
  Header,
  Title,
} from "./src/styles/root";
import {
  ChartLine,
  ClockCounterClockwise,
  Hamburger,
  Plus,
  User,
} from "phosphor-react-native";
import Listing from "./src/components/Listing";
import { useEffect, useState } from "react";
import RegisterNewTransaction from "./src/components/RegisterNewTransaction";
import { MockList } from "./mock";
import * as LocalAuthentication from "expo-local-authentication";
import Navigation from "./src/components/Navigation";
import { TransactionProvider } from "./src/Contexts/TransactionContext";

export default function App() {
  const [currentView, setCurrentView] = useState(<Listing />);
  const [List, setList] = useState([]);

  const { width, height } = Dimensions.get("window");

  const test = height * 0;

  useEffect(() => {
    // checkBiometrics();
    // authenticateWithBiometrics();
  }, []);

  const checkBiometrics = async () => {
    try {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      if (!compatible) {
        console.log("O dispositivo não suporta autenticação biométrica.");
        return;
      }

      const enrolled = await LocalAuthentication.isEnrolledAsync();
      console.log(LocalAuthentication);
      if (!enrolled) {
        console.log("Nenhum método biométrico registrado no dispositivo.");
        return;
      }

      const biometryType = await LocalAuthentication.getEnrolledInfoAsync();
      console.log("Tipo de biometria disponível:", biometryType);

      if (biometryType === "face") {
        console.log("Face ID está disponível no dispositivo.");
      } else if (biometryType === "fingerprint") {
        console.log("Touch ID está disponível no dispositivo.");
      } else {
        console.log("Outro tipo de biometria disponível.");
      }
    } catch (error) {
      console.error("Erro ao verificar a disponibilidade biométrica:", error);
    }
  };

  const authenticateWithBiometrics = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage:
          "Autentique-se usando a biometria para acessar o aplicativo.",
        fallbackLabel: "Use a senha",
      });

      if (result.success) {
        console.log("Autenticação bem-sucedida!");
      } else {
        console.log("Autenticação falhou ou foi cancelada.");
      }
    } catch (error) {
      console.error("Erro durante a autenticação biométrica:", error);
    }
  };

  const updateList = () => {
    setCurrentView(
      <RegisterNewTransaction
        setCurrentView={setCurrentView}
        setList={setList}
      />
    );
  };

  return (
    <TransactionProvider>
      <StatusBar style="light" />
      <Navigation />
    </TransactionProvider>
  );
}

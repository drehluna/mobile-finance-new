import { Dimensions, ScrollView, View } from "react-native";
import {
  ContainerTransaction,
  ContainerTransactionAmountAndDate,
  ContainerTransactionNameAndType,
  HeaderBottomContainer,
  Icon,
  Title,
} from "../styles/root";
import { Hamburger } from "phosphor-react-native";
import { useTransaction } from "../Contexts/TransactionContext";

export default function Listing() {
  const { width, height } = Dimensions.get("window");

  const { transactions } = useTransaction();

  const listTransaction = transactions.map((item) => {
    return (
      <ContainerTransaction>
        <Icon>{item.icon}</Icon>
        <View
          style={{
            display: "flex",
            width: "92%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ContainerTransactionNameAndType>
            <Title color="#D6D4CE" size="18px">
              {item.nome}
            </Title>
            <Title color="#91908D" size="15px">
              {item.type}
            </Title>
          </ContainerTransactionNameAndType>
          <ContainerTransactionAmountAndDate>
            <Title color="#D6D4CE" size="16px">
              {" "}
              - ${item.amount}
            </Title>
            <Title color="#91908D" size="16px">
              11/12/2024
            </Title>
          </ContainerTransactionAmountAndDate>
        </View>
      </ContainerTransaction>
    );
  });

  return (
    <>
      <HeaderBottomContainer>
        <Title color="#FFFF">Transações recentes</Title>
      </HeaderBottomContainer>

      <ScrollView style={{ display: "flex", marginTop: "90px" }}>
        {listTransaction}
      </ScrollView>
    </>
  );
}

import React from "react";
import { View, Text } from "react-native";
import { Vistorias } from "../../utils/typesVistorias";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

interface Props {
  item: Vistorias;
}

const Card: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.left} />
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          {item.check === true && (
            <View style={styles.redCircle}>
              <AntDesign name="warning" size={20} color="#FFF" />
            </View>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text style={styles.name}>
            {item.name} {">"}
          </Text>
          <Text style={styles.block}> Bloco {item.block}</Text>
          <Text style={styles.name}>- {item.paviment} Pavimento</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Text style={styles.name}>{item.incidents} incidentes</Text>
          <Text
            style={[
              styles.name,
              {
                marginRight: 10,
              },
            ]}
          >
            Entrega: {item.delivery_date}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

import React, { useState } from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";

import styles from "./styles";

import Data from "../../utils/vistorias.json";
import { Residences, Vistorias } from "../../utils/typesVistorias";
import { FlatList } from "react-native-gesture-handler";
import Card from "./Card";

const Vistoria: React.FC = () => {
  const [data] = useState<Residences[]>(Data.residences);
  const [search, setSearch] = useState<string>("");

  const Item = (item: Residences) => {
    const data: any = item.vistorias as any;

    return (
      <View>
        <View style={styles.topContainer}>
          <View style={styles.circle} />
          <View>
            <Text style={styles.residence}>{item.residence_name}</Text>
            <Text style={styles.construction}>{item.construction_company}</Text>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }: any) => <Card item={item} />}
          keyExtractor={(item: Vistorias) => item.id.toString()}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header value={search} onChangeText={(text) => setSearch(text)} />
      <FlatList
        data={data.filter((item) => {
          return item.residence_name.includes(search);
        })}
        renderItem={({ item }: any) => <Item {...item} />}
        keyExtractor={(item: Residences) => item.id.toString().trim()}
      />
    </View>
  );
};

export default Vistoria;

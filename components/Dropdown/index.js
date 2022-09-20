import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';

export default function DropdownComponent({state, setState}){
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={[
        { label: 'Bolos e Tortas', value: '1' },
        { label: 'Chocolates', value: '2' },
        { label: 'Doces de Festa', value: '3' },
        { label: 'Sobremesas', value: '4' },
      ]}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Selecione a Categoria..."
      searchPlaceholder="Search..."
      value={state}
      onChange={item => {
        setState(item.value);
      }}
    />
  );
};
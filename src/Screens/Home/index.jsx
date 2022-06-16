import React from 'react'
import { View, StyleSheet, Text, StatusBar, FlatList } from 'react-native'
import { Balance } from '../../Components/Balance'
import { Header } from '../../Components/Header'
import { Movements } from '../../Components/Movements'
import { Actions } from '../../Components/Actions'


const list = [
    {
        id: 1,
        label: 'Boleto da conta de luz',
        value: '300.90',
        date: '17/09/2022',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'PIX pagamento venda',
        value: '2800',
        date: '20/09/2022',
        type: 1 // receita ou entrada
    },{
        id: 3,
        label: 'Salário',
        value: '9.900',
        date: '22/09/2022',
        type: 1 // entrada
    },
]





export function Home () {
    return(
        <View styles = {styles.home}> 
            <Header name = 'Lucas Hanchop'/>

            <Balance saldo = '11.000.00' gastos = '1.000.00' />

            <Actions/>
            
            <StatusBar backgroundColor='#8000FF' />

            <Text style = {styles.title}> Últimas Movimentações </Text>

            <FlatList
                style = {styles.list}
                data = {list}
                key = { (item) => String(item.id) }
                showsVerticalScrollIndicator = {false}
                renderItem = { ({ item }) => <Movements data = {item} /> }
            />

        </View>
    )
}


const styles = StyleSheet.create({
    home:{
        backgroundColor: '#FAFAFA',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,

    }
})

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   })
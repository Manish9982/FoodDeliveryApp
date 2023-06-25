import AsyncStorage from "@react-native-async-storage/async-storage"

export const getMyStringValue = async (key) => {
    try {
        return await AsyncStorage.getItem(key)
    } catch (e) {
        console.log(e)
    }
}

export const setStringValue = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e)
    }
}

export const removeValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        console.log(e)
    }
}

export const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        console.log(e)
    }

}
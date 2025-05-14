import {Text, View} from "react-native";
import {Link} from "expo-router";

export default function Index() {
    return (
        <View
            className="flex-1 justify-center items-center"
        >
            <Text className="text-2xl">Edit app/index.tsx to edit this screen.</Text>
            <Link href="/transfer-money">Transferir dinero</Link>
            <Link href="/transfer-money/confirm-transfer">Confirmar</Link>
            <Link href="/transfer-money/transfer-success">Success</Link>
        </View>
    );
}

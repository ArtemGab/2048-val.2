import Counter from "../Counter/Counter";
import { MarginBottom6, MarginBottom12, MarginBottom24 } from "../../../public/globalStyles";
import { Header, HeaderInfo, Logo, Counters, HeaderRules, Titles, Text, TextBold, NewGame } from "./styles";

export default function HeaderGame() {
    return <Header>
        <MarginBottom24>
            <MarginBottom12>
                <HeaderInfo>
                    <Logo>2048</Logo>
                    <Counters>
                        <Counter count={0} title="СЧЕТ" />
                        <Counter count={0} title="ЛУЧШИЙ" />
                    </Counters>
                </HeaderInfo>
            </MarginBottom12>

            <HeaderRules>
                <Titles>
                    <MarginBottom6>
                        <Text>
                            <TextBold>Играть онлайн игры 2048</TextBold>
                        </Text>
                    </MarginBottom6>

                    <Text>Присоединяйтесь число и получить <TextBold>2048 плитки!</TextBold></Text>
                </Titles>
                <NewGame>Новая Игра</NewGame>
            </HeaderRules>
        </MarginBottom24>
    </Header>;
}

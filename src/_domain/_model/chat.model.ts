import {
    ChatOptions,
    ChatReturn,
    ChatService
} from '../../_lib/gpt/chat.service'

export class ChatModel {
    private static instance: ChatModel

    public static call(key: string): ChatModel {
        if (!ChatModel.instance) {
            ChatModel.instance = new ChatModel(key)
        }
        return ChatModel.instance
    }

    public constructor(key: string) {
        ChatService.call().setAPIKey(key)
    }

    public async callDocumetSummary(
        text: string,
        options: ChatOptions
    ): Promise<ChatReturn> {
        ChatService.call()
            .setOptions(options)
            .setMessage(text)
        await ChatService.call().do()
        return ChatService.call().getResult()
    }
}
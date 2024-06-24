import type { MouseEvent } from "react";
import type { GestureResponderEvent } from "react-native";

/**
 * @description Event type for onPress event handler
 *
 */
export type OnPressEvent<E = Element> = GestureResponderEvent | MouseEvent<E>;

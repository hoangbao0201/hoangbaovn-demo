"use client";

import React from "react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";

import { persistor, store } from "../../../redux/store";
import { PersistGate } from "redux-persist/integration/react";


export default function ReduxProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <SessionProvider>
                <Provider store={store}>
                    <PersistGate loading={false} persistor={persistor}>
                        {children}
                    </PersistGate>
                </Provider>
            </SessionProvider >
        </>
    );
}

import { gql } from "@apollo/client";

export const login = gql`{
    mutation{
        login(name)
    }
}`;

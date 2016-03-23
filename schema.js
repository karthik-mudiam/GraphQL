import UsersList from './data/users';
import {
        GraphQLString,
        GraphQLInt,
        GraphQLObjectType,
        GraphQLSchema,
        GraphQLList
} from 'graphql';

const Query = new GraphQLObjectType({
        name : "RootQuery",
        fields: () => ({
                doesItWork: {
                        type: GraphQLString,
                        resolve: function() {
                                console.log("In Schema");
                                return `Hoohoooaahhh...It Works!!!`;
                        }
                },

                users : {
                        type : new GraphQLList(User),
                        resolve: function() {
                                return UsersList;
                        }
                }
        })        
});

const User = new GraphQLObjectType({
        name : "User",
        description : "Contains user details",
        fields : () => ({
                name : {type : GraphQLString},
                title : {type : GraphQLString}
        })

});

const Schema = new GraphQLSchema({
        query : Query
});

export default Schema;

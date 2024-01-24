import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import CommentIcon from '../../assets/icons/Comment.svg';
import LikeIcon from '../../assets/icons/blue-heart.svg';


const CommentCard = () => {


        const comments = [
		{
			id:1,
			name: "A",
			comment: "Lorem ipsum vav.jegt paras.psedohon tekoliga att",
			commentCount: "3 Reply",
			likeCount: "12 Likes",
			time: '3hours ago'
		},
		{
			id:2,
			name: "D",
			comment: "Lorem ipsum vav.jegt paras.psedohon tekoliga att",
			commentCount: "3 Reply",
			likeCount: "12 Likes",
			time: '3hours ago'
		},
		{
			id:3,
			name: "N",
			comment: "Lorem ipsum vav.jegt paras.psedohon tekoliga att",
			commentCount: "3 Reply",
			likeCount: "12 Likes",
			time: '3hours ago'
		},
		{
			id:4,
			name: "V",
			comment: "Lorem ipsum vav.jegt paras.psedohon tekoliga att",
			commentCount: "3 Reply",
			likeCount: "12 Likes",
			time: '3hours ago'
		}
	];

    return (
        <View>
            <FlatList
                data={comments}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.mainContainer}>
                        <TouchableOpacity style={styles.nameContainer}>
                            <Text style={styles.nameText}>{item.name}</Text>
                        </TouchableOpacity>
                        <View style={styles.bottomContainer}>
                            <View style={styles.commentContainer}>
                                <Text style={styles.commentText}>{item.comment}</Text>
                            </View>
                            <View style={styles.countContainer}>
                                <TouchableOpacity style={styles.countTextContainer}>
                                    <CommentIcon width={14} height={14} />
                                    <Text style={styles.countText}>{item.commentCount}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.countTextContainer}>
                                    <LikeIcon width={14} height={14} />
                                    <Text style={styles.countText}>{item.likeCount}</Text>
                                </TouchableOpacity>
                                <View style={styles.countTextContainer}>
                                    <Text style={styles.countText}>{item.time}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )}

export default CommentCard;

const styles= StyleSheet.create({
    mainContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 30,
        marginBottom:20,
        
    },
    nameContainer: {
        backgroundColor: '#7F48E2',
        height: '58%',
        width: '10%',
        borderRadius: 15,
        marginRight: 15,
    },
    nameText: {
        fontSize:15,
        color: '#fff',
        alignSelf: 'center',
        position: 'absolute',
        top: 4,

    },
    bottomContainer: {
        width: '90%'
    },
    commentContainer: {
        width: "100%"
    },
    commentText: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    countContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 3,
    },
    countTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },
    countText: {
        fontSize: 12,
        marginHorizontal: 5
    },
})


import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from './Colors';
import { Spacings } from './Spacings';
const H = Dimensions.get('window').height
const W = Dimensions.get('window').width
import { FontSizes } from './FontSizes';
export const Styles = StyleSheet.create({
    primaryContainer:
    {
        // height: H,
        width: W,
    },
    primaryContainerWithBottomTabs:
    {
        width: W,
        paddingBottom: H * 0.12
    },
    splashImage:
    {
        height: H,
        width: W
    },
    searchBar:
    {
        height: H * 0.08,
        backgroundColor: 'white',
        elevation: 10,
        width: W * 0.95,
        alignSelf: 'center',
        marginTop: Spacings.large
    },

    dividerViewAtDashboard:
    {
        backgroundColor: Colors.yellowColorForBorder,
        height: 2.8,
        //width: W * 0.28
    },
    headingWithDivider:
    {
        padding: Spacings.large,
        textAlign: 'center',
        textDecorationLine: 'underline',
        textDecorationColor: Colors.yellowColorForBorder
    },
    cardSizeImage:
    {
        height: H * 0.2,
        width: W * 0.9,
        //resizeMode: 'contain',
        resizeMode: 'cover',
        backgroundColor: Colors.yellowColorForBorder,
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    foodCard:
    {
        width: W * 0.9,
        backgroundColor: 'white',
        borderRadius: 8,
        margin: Spacings.med,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 8,
        elevation: 5,
    },
    flatlistFoodItemsView:
    {
        height: H * 0.78

    },
    priceKey: {
        color: 'grey',
        padding: Spacings.small,
        fontWeight: '500'
    },
    priceText:
    {
        padding: Spacings.small,
        color: Colors.priceLabelOrange,
        fontWeight: '600'
    },
    foodNameText:
    {
        color: 'black',
        fontWeight: '600',
        padding: Spacings.small
    },
    addItemBox:
    {
        height: H * 0.05,
        width: W * 0.3,
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 3,
        margin: Spacings.small
    },
    plusMinusButton: {
        width: W * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: Colors.yellowColorForBorder
    },
    fullWidthContainer:
    {
        justifyContent: 'space-between'
    },
    quantityText:
    {
        paddingHorizontal: Spacings.verysmall
    },
    whiteText:
    {
        color: 'white'
    },
    cartViewCard: {
        position: 'absolute',
        alignSelf: 'center',
        top: H * 0.88,
        zIndex: 10
    },
    cartViewContainer:
    {
        backgroundColor: Colors.greenColorCart,
        width: W * 0.9,
        height: H * 0.1,
        borderRadius: 8,
        justifyContent: 'center',
        padding: Spacings.small
    },
    secondaryContainerCartView:
    {
    },
    viewCartText:
    {
        color: 'white'
    },
    ImageLoaderStyle:
    {
        position: "absolute",
        alignSelf: "center",
        top: H * 0.08
    },
    greenText:
    {
        color: Colors.greenColorCart
    },
    productDetailsImage:
    {
        height: H * 0.4,
        width: W,
        resizeMode: "cover",
    },
    mediumSpacingText:
    {
        padding: Spacings.med
    },
    underLineText:
    {
        textDecorationLine: "underline"
    },
    headerStyle:
    {
        backgroundColor: Colors.yellowColorForBorder
    },
    displaySmall: {
        'fontFamily': 'Poppins-Regular',
        'fontSize': 14,
        'fontWeight': '400',
    },
    displayMedium: {
        'fontFamily': 'Poppins-Regular',
        'fontSize': 16,
        'fontWeight': '400',
        'letterSpacing': 0,
    },

    displayLarge: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        fontWeight: '400',
    },

    boldSmall: {
        'fontFamily': 'Poppins-Regular',
        'fontSize': 14,
        'fontWeight': '600',
    },
    boldMedium: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        fontWeight: '600',
    },
    boldLarge: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        fontWeight: '600',
    },
    boldVeryLarge:
    {
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        fontWeight: '600',
    },
    default: {
        'fontFamily': 'Poppins-Regular',
        'fontSize': 14,
        'fontWeight': '400',
        'lineHeight': 0,
        'color': 'black'
    },

    logo: {
        height: H * 0.08,
        width: W * 0.08,
        aspectRatio: 28 / 9,
        alignSelf: "center",
        zIndex: 2,
        marginTop: H * 0.06,
    },
    mainView:
    {
        backgroundColor: "white",
        borderRadius: 5,
        elevation: 2,
        marginTop: H * 0.05,
        marginLeft: W * 0.03,
        marginEnd: W * 0.03,
        marginBottom: H * 0.06,
    },
    headingText:
    {
        textAlign: 'center',
        marginTop: H * 0.03,
        marginHorizontal: W * 0.03,
        fontSize: FontSizes.XL,
        color: Colors.BLACK,
    },
    cancelText:
    {
        textAlign: 'center',
        marginHorizontal: W * 0.03,
        fontSize: FontSizes.default,
        color: Colors.BLACK,
    },
    subheadingText:
    {
        textAlign: 'center',
        marginTop: H * 0.01,
        marginHorizontal: W * 0.03,
        fontSize: FontSizes.default,
        color: Colors.BLACK,
    },
    subheadingtext2:
    {
        marginTop: H * 0.03,
        marginLeft: W * 0.07,
        fontSize: FontSizes.default,
        color: Colors.BLACK,
        textAlign: "left"

    },
    horizontalContainer:
    {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    tabButton: {
        borderColor: 'gray',
        borderWidth: 1,
        borderColor: "gray",
        alignItems: "center",
        width: W * 0.38,
        padding: 8,
        borderRadius: 5,
        marginTop: H * 0.01
    },
    textInputStyle:
    {
        width: W * 0.8,
        alignSelf: "center",
        borderRadius: 8,
        fontSize: FontSizes.default,
        backgroundColor: "transparent",
        marginTop: H * 0.015,
        justifyContent: "center",
    },
    orangeText:
    {
        textAlign: 'right',
        marginTop: H * 0.03,
        marginHorizontal: W * 0.03,
        fontSize: FontSizes.SM,
        color: Colors.BUTTON_COLOR,
    },

    linearGradient:
    {
        justifyContent: 'center',
        borderRadius: 50,
        width: W * 0.7,
        padding: 10,
        textAlign: 'center',
        marginHorizontal: W * 0.2,
        marginVertical: H * 0.05,
        alignSelf: 'center',
        alignItems: 'center'

    },
    buttonStyle: {
        marginHorizontal: W * 0.2,
        marginVertical: H * 0.05,
        alignSelf: 'center'
    },
    logo: {
        height: H * 0.08,
        width: W * 0.08,
        aspectRatio: 28 / 9,
        alignSelf: "center",
        zIndex: 2,
        marginTop: H * 0.06,
    },

    bottomViewContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: H * 0.01,

    },
    bottomViewContainer2: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: H * 0.01,
    },


    buttonText: {
        textAlign: 'center',
        fontSize: FontSizes.default,
        color: Colors.WHITE,

    },

    forgetpasswordmsg: {
        textAlign: 'center',
        fontSize: FontSizes.SM,
        color: Colors.BLACK,
        marginTop: H * 0.01,

    },
    forgetText: {
        textAlign: 'center',
        fontSize: FontSizes.XL,
        color: Colors.BUTTON_COLOR,
        fontWeight: "600",
        marginTop: H * 0.01,
    },
    submitText: {
        textAlign: 'center',
        fontSize: FontSizes.default,
        color: Colors.BLACK,
        marginTop: H * 0.03,

    },
    cancelText: {
        textAlign: 'center',
        fontSize: FontSizes.default,
        color: Colors.BUTTON_COLOR,
        fontWeight: "600",
        marginTop: H * 0.03,
    },


    bottomText: {
        textAlign: 'center',
        marginTop: H * 0.03,
        fontSize: FontSizes.default,
        color: Colors.BLACK,

    },
    bottomText2: {
        textAlign: 'center',
        marginTop: H * 0.03,
        fontSize: FontSizes.default,
        color: Colors.BUTTON_COLOR,
    },
    bottomTextSignup: {
        textAlign: 'center',
        fontSize: FontSizes.default,
        color: Colors.BLACK,

    },
    bottomText2signup: {
        textAlign: 'center',
        fontSize: FontSizes.SM,
        color: Colors.BUTTON_COLOR,
    },
    modalStyling: {
        backgroundColor: "rgba(0,0,0,0.6)",
        height: H,
        width: W,
        justifyContent: "center",
        alignItems: "center",
    },
    modalViewStyling: {
        paddingVertical: H * 0.01,
        width: W * 0.9,
        backgroundColor: "white",
        borderRadius: 8,
    },
    horizontalTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: H * 0.01,
    },
    ImageLoaderStyle2:
    {
        top: H * 0.17
    },
    horizentalContainerHome: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: W * 0.07,
        marginTop: H * 0.02,
        alignItems: 'center'

    },
    verticalContainerHome: {
        // paddingBottom: H * 0.01,

    },
    nameTextHome:
    {
        fontSize: FontSizes.XXL,
        color: Colors.priceLabelOrange,
        fontFamily: 'Poppins-Medium',
    },
    welcomeHome: {
        fontSize: FontSizes.XL,
        color: Colors.BLACK,

    },
    profileImage:
    {
        height: H * 0.04,
        width: H * 0.04,
        margin: Spacings.small
    },
    flatlistFoodItemsHorizontalView:
    {
        height: H * 0.5

    },

    foodcartcontainerHome: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    FoodNameHome:
    {
        justifyContent: 'center',
        marginHorizontal: W * 0.03,
        fontSize: FontSizes.XL,
        width: W * 0.5,
        color: Colors.BLACK,
    },

    PriceNameHome:
    {
        marginHorizontal: W * 0.03,
        fontSize: FontSizes.default,
        width: W * 0.5,
        marginTop: H * 0.005,
        color: Colors.BLACK,
    },


    foodDescriptionHome: {
        fontSize: FontSizes.default,
        color: Colors.BLACK,
        marginHorizontal: W * 0.03,
        width: W * 0.5,

    },

    starImage:
    {
        height: H * 0.022,
        width: H * 0.022,
        marginLeft: W * 0.025,
    },
    cardSizeImageHome:
    {
        height: H * 0.17,
        width: H * 0.17,
        //resizeMode: 'contain',
        resizeMode: 'cover',
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    flatlistFoodItemsHorizontalViewHome:
    {
        // paddingBottom: Spacings.avoidHeaderAndMore,
    },

    caroselHomeView: {
        backgroundColor: 'gray',
        borderRadius: 8,
        height: H * 0.5,
        width: H * 0.5,
        marginLeft: W * 0.25,
        marginRight: W * 0.25,
        marginTop: H * 0.25,
    },

    caroselImageViewHome: {
        backgroundColor: 'gray',
        borderRadius: 5,
        height: H * 2,
        padding: 50,
        marginLeft: W * 0.25,
        marginRight: W * 0.25,
        marginTop: H * 0.25,
        paddingBottom: 20,
        //backgroundColor:"red"
    },
    orderCardcontainer: {
        borderWidth: 1,
        borderColor: Colors.yellowColorForBorder,
        borderRadius: 8,
        backgroundColor: Colors.backgroundColorForOrderCard,
        margin: Spacings.med,
        padding: Spacings.med,
    },
    orderCardheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: Spacings.med,
    },
    orderCardbody: {
        marginBottom: 10,
    },
    orderCardbutton: {
        backgroundColor: Colors.BUTTON_COLOR,
        padding: Spacings.med,
        borderRadius: 8,
    },
    primaryContainerOrder:
    {
        height: H * 0.92,
        width: W
    },
    stepsContainer:
    {
        margin: Spacings.med
    },
    paddingToText:
    {
        padding: Spacings.med
    },
    elementCard:
    {
        width: W,
        justifyContent: "center",
        margin: Spacings.large
    },
    centerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    carouselView:
    {
        padding: Spacings.small,
        elevation: 10,
    },
    DeliveryCardCart: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginHorizontal: W * 0.027,
        marginTop: H * 0.02,
        borderRadius: 20,
        borderWidth: 1,
        elevation: 5,
        padding: Spacings.small,
        backgroundColor: 'white',
        alignItems: 'center',
        borderColor: 'white'

    },

    cartTimeText: {
        fontSize: FontSizes.default,
        color: Colors.BLACK,
    },

    imageonCart:
    {
        height: H * 0.022,
        width: H * 0.022,
        marginLeft: W * 0.025,

    },
    horizontalContainerCart:
    {
        flexDirection: "row",
        alignItems: 'center',
        //  justifyContent: 'space-evenly',
    },

    foodnameTitleCart: {
        fontSize: FontSizes.SM,
        color: Colors.BLACK,
        padding: Spacings.small,
        marginLeft: W * 0.01

    },

    foodPriceCart: {
        fontSize: FontSizes.SM,
        color: Colors.BLACK,
        padding: Spacings.small,
        left: W * 0.22,
        color: Colors.greenColorCart

    },


    foodCardListCart:
    {
        width: W * 0.95,
        backgroundColor: 'white',
        borderRadius: 8,
        //margin: Spacings.med,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 8,
        elevation: 1,
    },
    forwordImageCart:
    {
        height: H * 0.022,
        width: H * 0.022,
        marginLeft: W * 0.17,
    },
    coupanCodeTextCart: {
        fontSize: FontSizes.SM,
        color: "gray",

    },
    coupanNameTextCart: {
        fontSize: FontSizes.SM,
        color: Colors.BLACK,

    },

    savingsCornerhorizentalContainercart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: W * 0.95,
        backgroundColor: 'white',
        padding: Spacings.med,
        alignSelf: 'center',


    },
    subTotalCart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width: W * 0.9
        // padding: Spacings.med,


    },
    savingsCornerhorizentalContainercart2: {

        justifyContent: 'space-between',
        alignItems: 'center',
        width: W * 0.95,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: Spacings.med,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 8,
        elevation: 1,
    },

    applyTextCart: {
        fontSize: FontSizes.default,
        color: Colors.greenColorCart,
        marginHorizontal: W * 0.03,
        left: W * 0.01,
    },
    borderCart: {
        borderWidth: 0.3,
        borderColor: "gray",
        width: W * 0.9,
        marginTop: H * 0.01,
    },
    seeallcoupantextCart: {
        fontSize: FontSizes.default,
        color: Colors.greenColorCart,
        marginTop: H * 0.025,
    },

    subTotalfoodPriceCart: {
        fontSize: FontSizes.default,
        color: Colors.BLACK,
        marginRight: W * 0.03,
        //  left: W * 0.27,
        color: Colors.greenColorCart

    },
    starImage:
    {
        height: H * 0.023,
        width: H * 0.023,
        marginLeft: W * 0.025,
    },

})
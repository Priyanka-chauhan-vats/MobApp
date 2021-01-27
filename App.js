import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import splashScreen from './screens/splash';
import Homescreen from './screens/Home';
import Complaint from './screens/Complaint';
import otpgeneration from './screens/otpgenerate';
import watchWard from './screens/watchWard';
import login from './screens/loginuser';
import Signup from './screens/Signupuser';
import loginAuthrity from './screens/loginauthrity'
import SignupAuthrity from './screens/signupAuthrity';
import userDashboard from './screens/userDashboard';
import listofComplaint from './screens/listofComplaint';
import NavigationDrawerStructure from './screens/drawer';
import Authrity from './screens/Authrity';
import circular from './screens/Circular';
import other from './screens/Other'
import StatusReport from './screens/StatusReport'
// import NavigationDrawerStructure from './screens/Drower';
import { Container } from 'native-base';
import profile from './screens/profile';
import apply from './screens/Apply';
import Pensionapply from './screens/ForPensionApply'
import applyView from './screens/ApplyView';
import MainScreenNavigator from './screens/footerTab'
import userdetailslist from './screens/UserdetailsList';
import track from './screens/track';
import trackinglist from './screens/trackingList';
import ForPensioneCard from './screens/ForPnsionerCard';
import ViewReport from './screens/View Report';
import OfficerList from './screens/OfficersList';
import actionNodalofc from './screens/actionNodalofc';
import Compaintdetails from './screens/complaintDetails';
import complaintTranfer from './screens/complaintTranfer';
import tranfer from './screens/transfer';
import tranferhistory from './screens/tranferHistory';
import Workflow from './screens/worklow';
import mystuff from './screens/mystuff';
import floating from './screens/floating';
import sendComments from './screens/sendComments';
import ClickonTransfer from './screens/ClickonTranfer';
import NodalOfficers from './screens/SelectNodal';
import GridOfficers from './screens/GridOfficers';
import Map from './screens/Map';
import EncroachmentApply from './screens/EncroachmentApply';
import EncroachmentParkApply from './screens/EncroachmenParkApply.';
import MiscApply from './screens/MiscApply';
import UnauthroizedApply from './screens/UnauthrizedApply';
import RightApply from './screens/RightWayRelatedApply';
import RoadRelatedApply from './screens/Roadrelated';
import byelawsApply from './screens/byelawsViolation';
import issueAssignByme from './screens/issueAssignbymeWorkprocess'
import Resloved from './screens/Resloved';
import Othercomplaint from './screens/Othercomplaint';
import Applyothercomplaint from './screens/Applyothercomplaint';
import Viewallothercomplaint from './screens/Viewalothercoplaint';
import IABMnotView from './screens/IABMnotView';
import IABMcomplaintDetails from './screens/IABMcomplaintDetails';
import IABMfloating from './screens/IABMfloadting';
import IssuesClosed from './screens/IssuesClosedDashboad';
import Feedbackthercomplaint from './screens/feedbackothercomplaint';
import Searchothercomplaint from './screens/Searchothercomplaint';
import Telephonic from './screens/Telephoneic';
import STFandSNS from './screens/STFandSNS';
import Listofgrievance from './screens/Listofgrievance';
import actionNodalofcViewed from './screens/actionNodalofc(Viewed)';
import mystuffotherthenstf from './screens/mystuffotherthenSTF';
import issueassigntomeotherSTF from './screens/issueAssigntomeotherSTF';
import issueAssignBymeotherSTF from './screens/issueAssignbymeotherSTF';
import IssuesClosedotehrSTF from './screens/IssuesClosedotherSTF';
import actionNodalofcotherSTF from './screens/actionNodalofcotherSTF';
import actionNodalofcViewedotherSTF from './screens/actionNodalofc(Viewed)otherSTF';
import Usersignupotp from './screens/usersignupotp';
import ReopenSTF from './screens/ReopenSTFcompliant';
import workinprogress from './screens/workinprogressSTF';
import closedcomplaint from './screens/closedcomplaint';
import onholdcomplaint from './screens/onholdcomplaint';
import Userloginotp from './screens/userloginotp';
import Authsignupotp from './screens/authosignuotp';
import Authloginotp from './screens/authloginotp';
import CompaintdetailsViewed from './screens/complaintDetails(Viewd)';
import userviewacomplaintotherthenstf from './screens/userviewallcomplaintOtherthenSTF';
import userassignedcomplaintotherthenstf from './screens/userassignedcompantitherthenstf';
import userreopencompalintotherstf from './screens/usercompalintotherthenstf';
import userotherthenstfcomplaintdetails from './screens/userotherthenstfcomplaintdetails';
import otherthenstfcomplaintdetailsNotViewed from './screens/complaintDetailsotherthenstf(not viewed)';
import floatingIATMothertenstf from './screens/floating(IssueAssigntome)otherthenstf';
import ClickonTransferOtherthenstf from './screens/ClickontransferOtherthenstf';
import NodalOfficersOyherthenstf from './screens/SelectNodalOtherthenstf';
import gridOfficersOyherthenstf from './screens/SelectGridofficerothenstf';
import workinprogressotherthenstf from './screens/workinprogressotherthenstf';
import Listofgenralcomplaint from './screens/listofgeneralcomplaint';
import otherthenstfcomplaintdetailsViewed from './screens/complaintdetalisotherthenstf(viewed)';
export default class App extends React.Component {

  render() {
    return (
      <Container>
        {/* <MainScreenNavigator/> */}
        <AppContainer />
        {/* <Usersignupotp/> */}
        {/* <Map/> */}
        {/* <userDashboard /> */}
        {/* <otpgeneration /> */}
        {/* <Home /> */}
        {/* <NavigationDrawerStructure/> */}
      </Container>

    );

  }
}

const AppNavigator = createStackNavigator({
  splash: {
    screen: splashScreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })

  },
  watchWard: {
    screen: watchWard,
    navigationOptions: ({ navigation }) => ({
      header: null
    })

  },
  Home: {
    screen: Homescreen,
    navigationOptions: ({ navigation }) => ({
      header: null
    })

  },
  drowerss:
  {
    screen: NavigationDrawerStructure,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  trackinglist: {
    screen: trackinglist,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Tracking Grievances List',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  IABMnotView: {
    screen: IABMnotView,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Issues Assigned by Me',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  IABMcomplaintDetails: {
    screen: IABMcomplaintDetails,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Complaint Details',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  STFandSNS: {
    screen: STFandSNS,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Authority Portal',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  Listofgrievance: {
    screen: Listofgrievance,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Grievance List',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  Listofgenralcomplaint: {
    screen: Listofgenralcomplaint,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'General Complaint',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  Reslovedd: {
    screen: Resloved,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Resolved',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  Othercomplaint: {
    screen: Othercomplaint,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Complaint Other then STF",

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  Applyothercomplaint: {
    screen: Applyothercomplaint,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Create New Complaint",

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  Telephonic: {
    screen: Telephonic,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "DDA helpline",

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  Viewallothercomplaint: {
    screen: Viewallothercomplaint,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Complaints Status",

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  userviewacomplaintotherthenstf: {
    screen: userviewacomplaintotherthenstf,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "All Complaints",

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  userassignedcomplaintotherthenstf: {
    screen: userassignedcomplaintotherthenstf,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Assigned Complaints",

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  userreopencompalintotherstf: {
    screen: userreopencompalintotherstf,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Reopen complaints",

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  issueAssignByme: {
    screen: issueAssignByme,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Issue Assign By me',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  closed: {
    screen: closedcomplaint,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Closed Complaints',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  onhold: {
    screen: onholdcomplaint,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'On Hold Complaints',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  issueAssignBymeotherSTF: {
    screen: issueAssignBymeotherSTF,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Issue Assign By me',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },

  Searchothercomplaint: {
    screen: Searchothercomplaint,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Search Complaints',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  Feedbackthercomplaint: {
    screen: Feedbackthercomplaint,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Write Feedback',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  IssuesClosed: {
    screen: IssuesClosed,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Issues that I have Closed',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  usersignupotp: {
    screen: Usersignupotp,
    navigationOptions: ({ navigation }) => ({
      headerTitle: '',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },

  IssuesClosedotehrSTF: {
    screen: IssuesClosedotehrSTF,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Issues that I have Closed',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },

  tranfer: {
    screen: tranfer,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Details Transfer',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  NodalOfficers: {
    screen: NodalOfficers,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Select Officers',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  NodalOfficersOyherthenstf: {
    screen: NodalOfficersOyherthenstf,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Select Nodal Officers',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  map: {
    screen: Map,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Map',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  GridOfficers: {
    screen: GridOfficers,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Select Officers',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  gridOfficersOyherthenstf:{
    screen: gridOfficersOyherthenstf,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Select Officers',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })
  },
  ClickonTransfer: {
    screen: ClickonTransfer,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Select',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  ClickonTransferOtherthenstf:{
    screen:ClickonTransferOtherthenstf,
    navigationOptions:({navigation})=>({
      headerTitle:"Select Officers",
      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })
  },

  sendComments: {
    screen: sendComments,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Send Comments',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  complaintTranfer: {
    screen: complaintTranfer,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Complaint Transfer',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  PensioneCard: {
    screen: ForPensioneCard,
    navigationOptions: ({ navigation }) => ({
      headerTitle: ' Employee Grievances',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  Apply: {
    screen: apply,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Apply for De-Sealing ',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  RoadRelatedApply: {
    screen: RoadRelatedApply,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Apply for Road Related ',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  byelawsApply: {
    screen: byelawsApply,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Apply for Building Byelaws Violaton',


      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  RightApply: {
    screen: RightApply,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Apply for Right of way Related ',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  UnauthroizedApply: {
    screen: UnauthroizedApply,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Apply for Ongoing Unauthorized Construction ',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  MiscApply: {
    screen: MiscApply,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Apply for Misc. ',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  EncroachmentParkApply: {
    screen: EncroachmentParkApply,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Apply for Encroachment in Park ',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  EncroachmentApply: {
    screen: EncroachmentApply,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Apply for Encroachment on public land/property ',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  PensionApply: {
    screen: Pensionapply,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Apply for Pension',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  applyView: {
    screen: applyView,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Details of Submitted Grievance',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  userdeshboard: {
    screen: userDashboard,
    navigationOptions: ({ navigation }) => ({
      header: null
    })

  },
  otherr: {
    screen: other,
    navigationOptions: ({ navigation }) => ({
      header: null
    })

  },
  Profile: {
    screen: profile,
    navigationOptions: ({ navigation }) => ({
      header: null
    })

  },
  circular: {
    screen: circular,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Public Circular',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })


  },
  AuthrityPortal: {
    screen: Authrity,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Authority Portal',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })


  },
  statusReport: {
    screen: StatusReport,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Authority Portal',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })


  },
  listofComplaint: {
    screen: listofComplaint,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'List Of STF Grievance',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  userloginotp: {
    screen: Userloginotp,
    navigationOptions: ({ navigation }) => ({
      headerTitle: '',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  OfficerList: {
    screen: OfficerList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'List Of Officers',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  details: {
    screen: Compaintdetails,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Details Grievances',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  otherthenstfcomplaintdetailsNotViewed: {
    screen: otherthenstfcomplaintdetailsNotViewed,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Details Grievances',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  otherthenstfcomplaintdetailsViewed: {
    screen:otherthenstfcomplaintdetailsViewed,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Details Grievances',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  detailsviewed: {
    screen: CompaintdetailsViewed,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Details Grievances',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  userotherthensSTFcomplaintdetails: {
    screen: userotherthenstfcomplaintdetails,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Details of complaint',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  actionNodalofc: {
    screen: actionNodalofc,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'New(Action not taken)[Not Viewed]',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  ReopenSTF: {
    screen: ReopenSTF,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Reopen Complaints',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  workinprogress: {
    screen: workinprogress,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Work in Progress Complaints',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  workinprogressotherthenstf: {
    screen: workinprogressotherthenstf,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Work in Progress Complaints',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  actionNodalofcotherSTF: {
    screen: actionNodalofcotherSTF,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'New(Action not taken)[Not Viewed]',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  actionNodalofcViewed: {
    screen: actionNodalofcViewed,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'New(Action not taken)[Viewed]',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  actionNodalofcViewedotherSTF: {
    screen: actionNodalofcViewedotherSTF,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'New(Action not taken)[Viewed]',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  viewreport: {
    screen: ViewReport,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'View All Report',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  tracking: {
    screen: track,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Track Grievances Item',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  loginauth: {
    screen: loginAuthrity,
    navigationOptions: ({ navigation }) => ({
      header: null
    })

  },
  detailslist: {
    screen: userdetailslist,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Listing of submitted  Grievances ',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  tranferhistory: {
    screen: tranferhistory,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Tranfer History',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  mystuff: {
    screen: mystuff,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Complaint Redressal',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  mystuffotherthenstf: {
    screen: mystuffotherthenstf,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Complaint Redressal',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  workflow: {
    screen: Workflow,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Issues Assign to me',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },
  issueassigntomeotherSTF: {
    screen: issueassigntomeotherSTF,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Issues Assign to me',

      headerStyle: {
        backgroundColor: '#356FE0',
        headerTintColor: 'white',
        headerTitleColor: 'white',


      },
      headerTintColor: 'white',
    })

  },

  floating: {
    screen: floating,
    navigationOptions: ({ navigation }) => ({
      header: null

    })

  },
  floatingIATMothertenstf: {
    screen: floatingIATMothertenstf,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  IABMfloating: {
    screen: IABMfloating,
    navigationOptions: ({ navigation }) => ({
      header: null
      // headerTitle: '',

      //  headerStyle: {
      //          backgroundColor: '#356FE0',
      //                 headerTintColor: 'white',
      //                  headerTitleColor:'white',


      //        },
      // headerTintColor: 'white',
    })

  },
  signupppp: {
    screen: Signup,
    navigationOptions: ({ navigation }) => ({
      header: null
    })

  },
  signupauth: {
    screen: SignupAuthrity,
    navigationOptions: ({ navigation }) => ({
      header: null
    })

  },
  Authsignupotp: {
    screen: Authsignupotp,
    navigationOptions: ({ navigation }) => ({
      header: null
    })

  },
  Authloginotp: {
    screen: Authloginotp,
    navigationOptions: ({ navigation }) => ({
      header: null
    })

  },

  complaintt:
  {
    screen: Complaint,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  Loginnnnn:
  {
    screen: login,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }


});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
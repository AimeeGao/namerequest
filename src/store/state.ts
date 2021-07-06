import { NameRequestI, StateModelIF } from '@/interfaces'
import { EntityType, Location, StaffPaymentOptions } from '@/enums'

export const stateModel: StateModelIF = {
  common: {
    currentJsDate: null,
    keycloakRoles: []
  },
  newRequestModel: {
    actingOnOwnBehalf: true,
    addressSuggestions: null,
    allowAutoApprove: false,
    analysisJSON: null,
    analyzePending: false,
    applicant: {
      addrLine1: '',
      addrLine2: '',
      addrLine3: '',
      city: '',
      clientFirstName: '',
      clientLastName: '',
      contact: '',
      countryTypeCd: Location.CA,
      declineNotificationInd: null,
      emailAddress: '',
      faxNumber: '',
      firstName: '',
      lastName: '',
      middleName: '',
      partyId: '',
      phoneNumber: '',
      postalCd: '',
      stateProvinceCd: ''
    },
    folioNumber: '',
    assumedNameOriginal: '',
    conditionsModalVisible: false,
    exitModalVisible: false,
    conflictId: null,
    conversionType: null,
    conversionTypeAddToSelect: null,
    corpNum: '',
    corpSearch: '',
    designationIssueTypes: [
      'designation_non_existent',
      'designation_mismatch',
      'designation_misplaced',
      'end_designation_more_than_once'
    ],
    displayedComponent: 'Tabs',
    doNotAnalyzeEntities: [
      EntityType.PAR,
      EntityType.CC,
      EntityType.CP,
      EntityType.PA,
      EntityType.FI,
      EntityType.XCP,
      EntityType.SO
    ],
    editMode: false,
    entity_type_cd: null,
    entityTypeAddToSelect: null,
    errors: [],
    existingRequestSearch: {
      emailAddress: '',
      nrNum: '',
      phoneNumber: ''
    },
    extendedRequestType: null,
    getNameReservationFailed: false,
    helpMeChooseModalVisible: false,
    incorporateLoginModalVisible: false,
    affiliationErrorModalVisible: false,
    isPersonsName: false,
    issueIndex: 0,
    location: null,
    locationInfoModalVisible: false,
    mrasSearchInfoModalVisible: false,
    mrasSearchResultCode: null,
    name: '',
    nameOriginal: '',
    nameChoices: {
      name1: '',
      designation1: '',
      name2: '',
      designation2: '',
      name3: '',
      designation3: ''
    },
    nameIsEnglish: true,
    nameAnalysisTimedOut: false,
    noCorpNum: false,
    noCorpDesignation: false,
    nr: {} as NameRequestI,
    nrData: {
      additionalInfo: '',
      corpNum: '',
      homeJurisNum: '',
      natureBusinessInfo: '',
      previousRequestId: '',
      tradeMark: '',
      xproJurisdiction: ''
    },
    nrOriginal: {} as NameRequestI,
    nrRequestNameMap: [],
    nrRequiredModalVisible: false,
    pickEntityModalVisible: false,
    pickRequestTypeModalVisible: false,
    priorityRequest: false,
    quickSearch: true,
    quickSearchNames: [],
    request_action_cd: null,
    request_jurisdiction_cd: '',
    requestExaminationOrProvideConsent: {
      0: {
        send_to_examiner: false,
        obtain_consent: false,
        conflict_self_consent: false,
        assumed_name: false
      },
      1: {
        send_to_examiner: false,
        obtain_consent: false,
        conflict_self_consent: false,
        assumed_name: false
      },
      2: {
        send_to_examiner: false,
        obtain_consent: false,
        conflict_self_consent: false,
        assumed_name: false
      },
      3: {
        send_to_examiner: false,
        obtain_consent: false,
        conflict_self_consent: false,
        assumed_name: false
      }
    },
    showActualInput: false,
    stats: null,
    submissionTabNumber: 0,
    submissionType: null,
    tabNumber: 0,
    userCancelledAnalysis: false,
    waitingAddressSearch: null,
    isLoadingSubmission: false
  },
  staffPayment: {
    option: StaffPaymentOptions.NONE,
    routingSlipNumber: '',
    bcolAccountNumber: '',
    datNumber: '',
    folioNumber: '',
    isPriority: false // not used in this UI
  },
  errorModel: {},
  paymentModel: {}
}

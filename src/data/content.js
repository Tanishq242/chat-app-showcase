// ============================================================
//  Edit this file to personalise the website.
// ============================================================

export const APP = {
  name: 'Chat App',
  tagline: 'End-to-end encrypted desktop messaging',
  description:
    'A secure desktop chat application built with JavaFX. It supports OTP-verified registration, RSA public/private key encryption, friend management and account settings, all through a clean multi-panel UI.',
  license: 'Educational / personal use',
}

// TODO: replace with your real details and links
export const ME = {
  name: 'Tanishq',
  role: 'Final-year BCA Student · Aspiring Software Developer',
  bio: 'I enjoy building practical software, from web apps and backend APIs to desktop applications. This project shows how I think about security, clean UI structure and clear documentation.',
  github: 'https://github.com/Tanishq242',
  repo: 'https://github.com/Tanishq242/whisper-secure-messaging-app',
  linkedin: 'https://www.linkedin.com/in/tanishq-442a29339/',
  email: 'mailto:kumar.tanishq081@gmail.com',
}

export const STATS = [
  { value: 'RSA', label: 'Public/private key encryption' },
  { value: '4-digit', label: 'OTP verification' },
  { value: '6', label: 'Application screens' },
  { value: '3', label: 'Column chat layout' },
]

export const FEATURES = [
  {
    icon: 'smartphone',
    title: 'OTP-based Registration',
    text: 'The mobile number is verified with a 4-digit OTP before an account is created.',
  },
  {
    icon: 'lock',
    title: 'Secure Login',
    text: 'Passwords are hashed, and each user has a local JKS key store that holds their private key.',
  },
  {
    icon: 'shield',
    title: 'End-to-End Encrypted Messaging',
    text: 'Every message is encrypted with the receiver’s RSA public key and can only be opened with their private key.',
  },
  {
    icon: 'key',
    title: 'Forgot Password',
    text: 'An OTP-verified reset flow that also regenerates the key store and updates the public key.',
  },
  {
    icon: 'users',
    title: 'Friend List',
    text: 'Add and remove friends, with the chat list updating in real time.',
  },
  {
    icon: 'settings',
    title: 'Account Settings',
    text: 'Change display name, password and profile photo, or delete the account.',
  },
  {
    icon: 'layout',
    title: 'Multi-panel JavaFX UI',
    text: 'Split layout with a left sidebar, central chat area and a right info panel.',
  },
]

// file = name inside public/screenshots/
export const SCREENS = [
  {
    id: 'signup',
    label: 'Sign Up',
    file: 'signup.png',
    title: 'Sign Up',
    text: 'A dual-pane layout with a decorative left panel and a right form panel.',
    points: ['Name, Mobile, Password, Confirm Password', 'Inline validation warnings', 'Button to navigate to Login'],
  },
  {
    id: 'otp',
    label: 'OTP Verify',
    file: 'otp.png',
    title: 'Sign Up OTP Verification',
    text: 'After the form is submitted a 4-digit OTP panel appears.',
    points: ['Countdown timer label', '4 individual digit inputs', 'Verify and Resend options'],
  },
  {
    id: 'login',
    label: 'Login',
    file: 'login.png',
    title: 'Login',
    text: 'A standard login form with quick links to the other flows.',
    points: ['Mobile number and Password', 'Forgot Password link', 'Navigate to Sign Up'],
  },
  {
    id: 'forgot',
    label: 'Forgot Password',
    file: 'forgot-password.png',
    title: 'Forgot Password',
    text: 'A three-step sub-flow that resets the password safely.',
    points: ['Mobile input', 'OTP input with countdown', 'New password and confirmation'],
  },
  {
    id: 'chat',
    label: 'Main Chat',
    file: 'dashboard.png',
    title: 'Main Chat',
    text: 'A three-column layout designed for fast, focused conversations.',
    points: [
      'Left: profile picture, username, search bar, chat person list',
      'Middle: message bubbles, text area, send, attach and emoji',
      'Right: info panel, encryption label, options menu',
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    file: 'settings.png',
    title: 'Settings',
    text: 'A focused menu for managing the account.',
    points: ['Change account name', 'Change account password', 'Change profile photo', 'Delete account'],
  },
]

export const FLOWS = [
  {
    id: 'signup',
    label: 'Sign Up',
    steps: [
      { t: 'Fill the form', d: 'User enters Name, Mobile, Password and Confirm Password.' },
      {
        t: 'Validate input',
        d: 'All fields non-empty, mobile has at least 10 digits, password longer than 5 characters and both password fields match.',
      },
      { t: 'Generate OTP', d: 'OTP Generate Function(mobile) returns a response code.' },
      { t: 'Check for duplicates', d: 'If the mobile already exists in the database a warning is shown, otherwise the OTP is sent.' },
      {
        t: 'Verify OTP',
        d: 'Get Verification ID (from JSON), then Verify OTP(mobile, OTP, verificationID) must return response code 200.',
      },
      {
        t: 'Create the key store',
        d: 'JKS File Generate(password) returns 1 or 0, then Setup Code unlocks the JKS and stores the private key.',
      },
      { t: 'Prepare the public key', d: 'Load Public Key, then convert it to Base64 (the “modified public key”).' },
      {
        t: 'Save the account',
        d: 'Hash Password, insert name, mobile, verified, hash and modified public key into the DB, and create the JSON and TXT files.',
      },
      { t: 'Open Login', d: 'The Login scene is loaded.' },
    ],
  },
  {
    id: 'login',
    label: 'Login',
    steps: [
      { t: 'Enter credentials', d: 'User enters Mobile and Password.' },
      { t: 'Validate input', d: 'Fields must be non-empty and the mobile must have at least 10 digits.' },
      { t: 'Read stored hash', d: 'Data Read Function(mobile, password) fetches the stored hash from the database.' },
      { t: 'Unlock keys', d: 'Setup Code unlocks the JKS file and stores the private key in memory.' },
      { t: 'Check password', d: 'Check Password Function(plainPassword, hash) returns true or false.' },
      { t: 'Open Main Chat', d: 'On success the Main scene is loaded.' },
    ],
  },
  {
    id: 'forgot',
    label: 'Forgot Password',
    steps: [
      { t: 'Enter registered mobile', d: 'Validation: non-empty and at least 10 digits.' },
      { t: 'Check the account exists', d: 'Data Exist Function(mobile) returns 1 or 0.' },
      { t: 'Send and verify OTP', d: 'OTP Generate, Get Verification ID, then Verify OTP must return code 200.' },
      { t: 'Set a new password', d: 'New password and confirmation are validated (non-empty, longer than 5, matching).' },
      { t: 'Update the database', d: 'Hash Password, then Database Update Password(hash, mobile).' },
      { t: 'Rebuild the key store', d: 'Delete the old JKS file, generate a new one, and run Setup Code to store the new private key.' },
      { t: 'Refresh the public key', d: 'Load Public Key, convert to Base64, then In Database Update Public Key(modifiedKey, mobile).' },
      { t: 'Back to Login', d: 'The Login scene is loaded.' },
    ],
  },
  {
    id: 'send',
    label: 'Send Message',
    steps: [
      { t: 'User clicks Send', d: 'The message text is read from the input area.' },
      { t: 'Encrypt', d: 'Encrypt Function(message, receiverModifiedPublicKey) returns the encrypted message.' },
      { t: 'Encode and send', d: 'Send Msg Function(mobile, message, publicKey) produces the encoded message.' },
      { t: 'Write to the socket', d: 'Sender Mail Function(dataOutputStream, message, socket) transmits it to the server.' },
      { t: 'Render the bubble', d: 'Send Message GUI Function draws the outgoing message bubble in the chat area.' },
    ],
  },
  {
    id: 'receive',
    label: 'Receive Message',
    steps: [
      { t: 'Receiving thread', d: 'A background thread listens to the server for incoming messages.' },
      { t: 'Route the message', d: 'Message Route Function(originalMessage, encryptedMessage, isTextMsg) handles it.' },
      { t: 'Decrypt', d: 'Decrypt Function(encryptedMsg, privateKey) returns the original message.' },
      { t: 'Render the bubble', d: 'Receiver Message Function draws the incoming bubble and scrolls the chat.' },
    ],
  },
  {
    id: 'addfriend',
    label: 'Add Friend',
    steps: [
      { t: 'Listener fires', d: 'An event listener on the chat person list is triggered.' },
      { t: 'Chat Person Function', d: 'Builds the entries from the result set.' },
      { t: 'Add Person Function', d: 'Adds the person to the list with name, id and avatar.' },
      { t: 'Update ChatList Function', d: 'Refreshes the UI so the new friend appears immediately.' },
    ],
  },
  {
    id: 'removefriend',
    label: 'Remove Friend',
    steps: [
      { t: 'Three-dot menu → Delete', d: 'The user opens a contact’s menu and chooses Delete.' },
      { t: 'Chat Person Delete Function', d: 'Removes the contact’s row from the list view.' },
      { t: 'Remove Person Function', d: 'Removes the person by mobile number.' },
      { t: 'Update File', d: 'The entry is removed from local storage.' },
      { t: 'Clear the checkmark', d: 'The selection checkmark is removed from the UI.' },
    ],
  },
]

export const CRYPTO_FUNCS = [
  ['Hash Password', 'Plain password', 'Hashed password'],
  ['Check Password', 'Plain password + Hash', 'true / false'],
  ['JKS File Generate', 'Password', '1 (success) / 0 (failure)'],
  ['Setup Code', 'None', 'Unlocks JKS, stores private key'],
  ['Load Public Key', 'None', 'Public key'],
  ['Convert Public Key to Base64', 'Public key', 'Modified (Base64) public key'],
  ['Encrypt', 'Message + receiver’s modified public key', 'Encrypted message'],
  ['Decrypt', 'Encrypted message + private key', 'Original message'],
]

export const DB_FUNCS = [
  ['Data Insert in Database', 'name, mobile, verified, password, modifiedPublicKey', '1 / 0'],
  ['Data Read Function', 'mobile, password', 'Stored hash'],
  ['Data Exist Function', 'mobile', '1 / 0'],
  ['Database Update Password', 'hash, mobile', '1 / 0'],
  ['In Database Update Public Key', 'modifiedKey, mobile', '1 / 0'],
]

export const TECH = [
  { name: 'Java', group: 'Language' },
  { name: 'JavaFX', group: 'UI' },
  { name: 'RSA Encryption', group: 'Security' },
  { name: 'JKS Key Store', group: 'Security' },
  { name: 'Password Hashing', group: 'Security' },
  { name: 'OTP Verification API', group: 'Integration' },
  { name: 'Socket Programming', group: 'Networking' },
  { name: 'Multithreading', group: 'Concurrency' },
  { name: 'Database (CRUD)', group: 'Data' },
  { name: 'JSON Handling', group: 'Data' },
  { name: 'Event-driven UI', group: 'Design' },
  { name: 'Layout Containers', group: 'Design' },
]

export const SKILLS = [
  'Designing multi-step verification flows',
  'Applying public-key cryptography in a real app',
  'Client/server messaging with sockets and threads',
  'Structuring a large JavaFX scene graph',
  'Input validation and secure password handling',
  'Writing clear technical documentation',
]

// Conversation card data organized by topic
export const topics = [
  { key: 'announcement', label: 'Announcement', icon: 'Megaphone' },
  { key: 'advertisement', label: 'Advertisement', icon: 'ShoppingBag' },
  { key: 'invitation', label: 'Invitation', icon: 'Mail' },
];

export const cards = [
  // ANNOUNCEMENT (18)
  {
    id: 'ann-1',
    topic: 'announcement',
    title: 'School Assembly Notice',
    questions: [
      'What is the announcement about?',
      'When and where will it happen?',
      'Who should attend?'
    ],
    vocab: ['attention', 'mandatory', 'venue', 'schedule'],
    example: 'Good morning, everyone. Please be informed that our school assembly will be held in the main hall at 8:00 a.m. tomorrow. Attendance is mandatory for all students.'
  },
  {
    id: 'ann-2', topic: 'announcement', title: 'Class Cancelled',
    questions: ['Which class is cancelled?', 'What is the reason?', 'Is there a make-up class?'],
    vocab: ['cancelled', 'postponed', 'rescheduled', 'due to'],
    example: 'Attention, Grade 10. Today\'s math class is cancelled due to a teacher meeting. The make-up class will be next Monday at 3 p.m.'
  },
  {
    id: 'ann-3', topic: 'announcement', title: 'Lost and Found',
    questions: ['What item was found?', 'Where can the owner claim it?', 'How to prove ownership?'],
    vocab: ['belongings', 'describe', 'identify', 'claim'],
    example: 'A black wallet was found near the cafeteria. Please describe the contents to claim it at the office.'
  },
  {
    id: 'ann-4', topic: 'announcement', title: 'Library Hours Change',
    questions: ['What are the new hours?', 'When does the change start?', 'Why is it changing?'],
    vocab: ['effective', 'extended hours', 'policy', 'temporarily'],
    example: 'Effective next week, the library will be open from 7 a.m. to 7 p.m. Monday to Friday.'
  },
  {
    id: 'ann-5', topic: 'announcement', title: 'Exam Schedule',
    questions: ['Which subjects?', 'What dates?', 'What materials to bring?'],
    vocab: ['exam', 'schedule', 'materials', 'venue'],
    example: 'Please check the notice board for the midterm exam schedule. Bring your student ID and pencils.'
  },
  {
    id: 'ann-6', topic: 'announcement', title: 'Cafeteria Menu Update',
    questions: ['What new items?', 'Any price changes?', 'When does it start?'],
    vocab: ['menu', 'specials', 'pricing', 'available'],
    example: 'Starting Monday, the cafeteria will offer vegetarian specials and fresh fruit cups.'
  },
  {
    id: 'ann-7', topic: 'announcement', title: 'Club Meeting',
    questions: ['Which club?', 'When and where?', 'What will be discussed?'],
    vocab: ['agenda', 'members', 'attendance', 'meeting'],
    example: 'The English Club will meet in Room 204 at 4 p.m. today to plan the speech contest.'
  },
  {
    id: 'ann-8', topic: 'announcement', title: 'Safety Drill',
    questions: ['What type of drill?', 'What are the instructions?', 'How to stay safe?'],
    vocab: ['evacuation', 'assembly point', 'remain calm', 'instructions'],
    example: 'We will conduct a fire drill at 10 a.m. Please follow your teacher to the assembly point calmly.'
  },
  {
    id: 'ann-9', topic: 'announcement', title: 'Bus Delay Notice',
    questions: ['Which route?', 'How long is the delay?', 'What should students do?'],
    vocab: ['delayed', 'route', 'approximate', 'alternative'],
    example: 'School bus route 3 is delayed by approximately 15 minutes due to traffic.'
  },
  {
    id: 'ann-10', topic: 'announcement', title: 'Scholarship Opportunity',
    questions: ['Who can apply?', 'What is the deadline?', 'Where to get forms?'],
    vocab: ['eligibility', 'deadline', 'application', 'submit'],
    example: 'Scholarship applications are open for Grade 12 students. Submit your forms by May 10th.'
  },
  {
    id: 'ann-11', topic: 'announcement', title: 'Sports Day Information',
    questions: ['When is it?', 'What events?', 'Any special rules?'],
    vocab: ['participants', 'spectators', 'equipment', 'schedule'],
    example: 'Sports Day will be held on Friday. Check the event schedule on the board.'
  },
  {
    id: 'ann-12', topic: 'announcement', title: 'Parent-Teacher Meeting',
    questions: ['Which grade?', 'What is the purpose?', 'How to register?'],
    vocab: ['conference', 'appointment', 'feedback', 'register'],
    example: 'There will be a parent-teacher conference next Thursday. Parents can register online.'
  },
  {
    id: 'ann-13', topic: 'announcement', title: 'Field Trip Reminder',
    questions: ['Where to meet?', 'What to bring?', 'What time to return?'],
    vocab: ['permission slip', 'packed lunch', 'departure', 'return'],
    example: 'Field trip to the science museum tomorrow. Bring your permission slip and packed lunch.'
  },
  {
    id: 'ann-14', topic: 'announcement', title: 'Competition Results',
    questions: ['Who are the winners?', 'What are the prizes?', 'When is the ceremony?'],
    vocab: ['announce', 'winners', 'congratulations', 'ceremony'],
    example: 'Congratulations to the debate team for winning first place! Details on the ceremony soon.'
  },
  {
    id: 'ann-15', topic: 'announcement', title: 'New Campus Rules',
    questions: ['What is the rule?', 'When does it start?', 'Why is it important?'],
    vocab: ['policy', 'enforce', 'prohibited', 'allowed'],
    example: 'Starting next week, wearing ID cards on campus is mandatory for everyone.'
  },
  {
    id: 'ann-16', topic: 'announcement', title: 'IT Maintenance',
    questions: ['What systems are affected?', 'When is downtime?', 'Any alternatives?'],
    vocab: ['maintenance', 'offline', 'access', 'restore'],
    example: 'The school Wi‑Fi will be offline from 6–7 p.m. for maintenance.'
  },
  {
    id: 'ann-17', topic: 'announcement', title: 'Weather Advisory',
    questions: ['What is the advisory?', 'What actions to take?', 'How long will it last?'],
    vocab: ['advisory', 'precaution', 'severe', 'cancel'],
    example: 'Due to heavy rain, after-school activities are cancelled today. Stay safe.'
  },
  {
    id: 'ann-18', topic: 'announcement', title: 'Welcome New Students',
    questions: ['Who is welcomed?', 'What support is available?', 'Where to get help?'],
    vocab: ['orientation', 'support', 'counselor', 'buddy system'],
    example: 'Welcome, new students! Join the orientation at 9 a.m. in the auditorium.'
  },

  // ADVERTISEMENT (18)
  {
    id: 'adv-1', topic: 'advertisement', title: 'New Smoothie Sale',
    questions: ['What is the product?', 'What is the price?', 'Why should people buy it?'],
    vocab: ['fresh', 'limited offer', 'discount', 'healthy'],
    example: 'Try our fresh mango smoothie! Only $2.50 this week — limited offer!'
  },
  { id: 'adv-2', topic: 'advertisement', title: 'Book Fair Promo',
    questions: ['What books?', 'What is the deal?', 'Where is the event?'],
    vocab: ['bestseller', 'bundle', 'buy one get one', 'booth'],
    example: 'Visit the book fair! Buy one, get one 50% off on bestsellers.'
  },
  { id: 'adv-3', topic: 'advertisement', title: 'Language App Ad',
    questions: ['What problem does it solve?', 'How much is it?', 'What features?'],
    vocab: ['trial', 'premium', 'practice daily', 'pronunciation'],
    example: 'Boost your English with SpeakEasy. 7‑day free trial, then $3.99/month.'
  },
  { id: 'adv-4', topic: 'advertisement', title: 'Cafeteria Combo',
    questions: ['What items are included?', 'How much is the combo?', 'When is it available?'],
    vocab: ['combo', 'value', 'save', 'limited'],
    example: 'Lunch combo: sandwich + juice + fruit for $4. Save more at the cafeteria!'
  },
  { id: 'adv-5', topic: 'advertisement', title: 'Tutoring Service',
    questions: ['What subject?', 'Who is the tutor?', 'What results?'],
    vocab: ['qualified', 'improve', 'score', 'guarantee'],
    example: 'Improve your math scores with qualified tutors. Call now for a free consultation.'
  },
  { id: 'adv-6', topic: 'advertisement', title: 'Eco Bottle',
    questions: ['What makes it special?', 'What benefit?', 'What call to action?'],
    vocab: ['reusable', 'eco‑friendly', 'hydration', 'join us'],
    example: 'Go green with our reusable bottle. Stay hydrated, save the planet.'
  },
  { id: 'adv-7', topic: 'advertisement', title: 'Gym Membership',
    questions: ['What is the offer?', 'Who is it for?', 'Any bonus?'],
    vocab: ['membership', 'trial', 'coach', 'goal'],
    example: 'Join FitZone! Student membership 20% off. Free coach session included.'
  },
  { id: 'adv-8', topic: 'advertisement', title: 'Cinema Night',
    questions: ['What movie?', 'What time?', 'Any snacks?'],
    vocab: ['premiere', 'tickets', 'snack combo', 'screening'],
    example: 'Friday Cinema Night — buy tickets now and get a free popcorn upgrade.'
  },
  { id: 'adv-9', topic: 'advertisement', title: 'Online Course',
    questions: ['What skills?', 'How long?', 'What certificate?'],
    vocab: ['module', 'mentor', 'certificate', 'flexible'],
    example: 'Master coding in 8 weeks with mentor support. Enroll today.'
  },
  { id: 'adv-10', topic: 'advertisement', title: 'Second‑hand Market',
    questions: ['What items?', 'What condition?', 'What price range?'],
    vocab: ['pre‑loved', 'affordable', 'negotiate', 'swap'],
    example: 'Pre‑loved goods at the student market this Saturday. Great deals!'
  },
  { id: 'adv-11', topic: 'advertisement', title: 'Apparel Sale',
    questions: ['What discount?', 'What styles?', 'Any codes?'],
    vocab: ['clearance', 'limited stock', 'coupon', 'fashion'],
    example: 'Clearance sale — up to 60% off on hoodies and tees. Use code STUDENT60.'
  },
  { id: 'adv-12', topic: 'advertisement', title: 'Music Lessons',
    questions: ['Which instruments?', 'Who teaches?', 'When are the classes?'],
    vocab: ['private lesson', 'practice', 'performance', 'slots'],
    example: 'Learn guitar or piano with patient teachers. Weekend slots available.'
  },
  { id: 'adv-13', topic: 'advertisement', title: 'Travel Deal',
    questions: ['Where to?', 'What is included?', 'What is the price?'],
    vocab: ['package', 'flight', 'hotel', 'early bird'],
    example: 'Early bird to Bali: flight + 3 nights hotel from $199. Book now!'
  },
  { id: 'adv-14', topic: 'advertisement', title: 'Study Planner',
    questions: ['What problem does it solve?', 'What features?', 'Who is it for?'],
    vocab: ['organize', 'reminder', 'track', 'focus'],
    example: 'Stay organized with PlanPro — the study planner that keeps you focused.'
  },
  { id: 'adv-15', topic: 'advertisement', title: 'Cafe New Drink',
    questions: ['What flavor?', 'Any topping?', 'Why try it?'],
    vocab: ['signature', 'creamy', 'refreshing', 'limited'],
    example: 'Try our signature caramel latte — creamy, refreshing, and limited this month.'
  },
  { id: 'adv-16', topic: 'advertisement', title: 'Tech Gadget',
    questions: ['What specs?', 'What benefit?', 'What guarantee?'],
    vocab: ['performance', 'battery life', 'warranty', 'innovative'],
    example: 'Experience fast performance with the new NovaPhone. 2‑year warranty included.'
  },
  { id: 'adv-17', topic: 'advertisement', title: 'Art Workshop',
    questions: ['Who leads it?', 'What will you learn?', 'What materials?'],
    vocab: ['creative', 'materials provided', 'beginner', 'register'],
    example: 'Unleash your creativity at our art workshop. Materials provided.'
  },
  { id: 'adv-18', topic: 'advertisement', title: 'Streaming Service',
    questions: ['How many shows?', 'Any family plan?', 'What devices?'],
    vocab: ['unlimited', 'ad‑free', 'multi‑device', 'trial'],
    example: 'Watch unlimited shows ad‑free on any device. Start your free trial today.'
  },

  // INVITATION (18)
  { id: 'inv-1', topic: 'invitation', title: 'Birthday Party Invite',
    questions: ['Who is invited?', 'When and where?', 'What to bring?'],
    vocab: ['RSVP', 'celebrate', 'dress code', 'host'],
    example: 'You\'re invited to my birthday party this Saturday at 6 p.m. at my house. Please RSVP.'
  },
  { id: 'inv-2', topic: 'invitation', title: 'Study Group',
    questions: ['What subject?', 'What is the goal?', 'How to join?'],
    vocab: ['review', 'prepare', 'materials', 'join'],
    example: 'Let\'s form a study group for the English exam. Meet in the library after school.'
  },
  { id: 'inv-3', topic: 'invitation', title: 'Picnic in the Park',
    questions: ['What food?', 'What activities?', 'Who can come?'],
    vocab: ['potluck', 'blanket', 'games', 'meetup'],
    example: 'Join us for a picnic on Sunday at Riverside Park. Bring snacks and a blanket.'
  },
  { id: 'inv-4', topic: 'invitation', title: 'Movie Night',
    questions: ['What movie?', 'What time?', 'Any snacks?'],
    vocab: ['screen', 'tickets', 'popcorn', 'friends'],
    example: 'Movie night on Friday at 7 p.m. Let\'s meet at the mall cinema.'
  },
  { id: 'inv-5', topic: 'invitation', title: 'Volunteering Event',
    questions: ['What is the cause?', 'Where to meet?', 'What to prepare?'],
    vocab: ['charity', 'donation', 'community', 'support'],
    example: 'Volunteer with us at the beach clean‑up this Saturday. Gloves provided.'
  },
  { id: 'inv-6', topic: 'invitation', title: 'Club Tryouts',
    questions: ['Which club?', 'What skills?', 'Any requirements?'],
    vocab: ['audition', 'tryout', 'beginner friendly', 'commitment'],
    example: 'Dance club tryouts next Wednesday after school in the gym. All levels welcome.'
  },
  { id: 'inv-7', topic: 'invitation', title: 'Family Dinner',
    questions: ['Who will attend?', 'What dishes?', 'What time?'],
    vocab: ['gather', 'dish', 'host', 'celebrate'],
    example: 'Would you like to join our family dinner this weekend? We start at 6 p.m.'
  },
  { id: 'inv-8', topic: 'invitation', title: 'Open House',
    questions: ['What will be shown?', 'Who should come?', 'What time frame?'],
    vocab: ['tour', 'presentation', 'welcome', 'guest'],
    example: 'You are invited to our school open house this Thursday from 3–5 p.m.'
  },
  { id: 'inv-9', topic: 'invitation', title: 'Game Night',
    questions: ['What games?', 'Any teams?', 'What snacks?'],
    vocab: ['board games', 'cards', 'team', 'score'],
    example: 'Game night at my place on Saturday. Bring your favorite board game!'
  },
  { id: 'inv-10', topic: 'invitation', title: 'Cultural Festival',
    questions: ['What performances?', 'Any dress code?', 'Any entry fee?'],
    vocab: ['performance', 'booths', 'tradition', 'celebration'],
    example: 'Come to the cultural festival this weekend. Enjoy performances and food booths.'
  },
  { id: 'inv-11', topic: 'invitation', title: 'Workshop Invitation',
    questions: ['What will you learn?', 'Who is the speaker?', 'How to register?'],
    vocab: ['speaker', 'session', 'materials', 'sign up'],
    example: 'Join our resume workshop on Tuesday. Sign up online, limited seats available.'
  },
  { id: 'inv-12', topic: 'invitation', title: 'Holiday Gathering',
    questions: ['What holiday?', 'What activities?', 'What gifts?'],
    vocab: ['celebrate', 'gift exchange', 'potluck', 'tradition'],
    example: 'Holiday gathering at my apartment next Friday. Bring a small gift for exchange.'
  },
  { id: 'inv-13', topic: 'invitation', title: 'Team Meeting',
    questions: ['What is the agenda?', 'Who must attend?', 'What documents?'],
    vocab: ['agenda', 'minutes', 'update', 'deadline'],
    example: 'Team meeting tomorrow at 9 a.m. in Room 301 to discuss project updates.'
  },
  { id: 'inv-14', topic: 'invitation', title: 'Coffee Chat',
    questions: ['Where to meet?', 'What to talk about?', 'How long?'],
    vocab: ['catch up', 'chat', 'café', 'quick'],
    example: 'Want to grab a coffee after class? Let\'s chat for 30 minutes.'
  },
  { id: 'inv-15', topic: 'invitation', title: 'Sports Practice',
    questions: ['Which sport?', 'What equipment?', 'What time?'],
    vocab: ['practice', 'coach', 'warm‑up', 'team'],
    example: 'Join soccer practice at 4 p.m. on the field. Don\'t forget your water bottle.'
  },
  { id: 'inv-16', topic: 'invitation', title: 'Cooking Together',
    questions: ['What recipe?', 'Who buys ingredients?', 'Where to cook?'],
    vocab: ['recipe', 'ingredient', 'prepare', 'taste'],
    example: 'Let\'s cook ramen together at my place on Saturday afternoon.'
  },
  { id: 'inv-17', topic: 'invitation', title: 'Language Exchange',
    questions: ['Which languages?', 'How often?', 'What format?'],
    vocab: ['exchange', 'partner', 'session', 'practice'],
    example: 'Looking for a language exchange partner — English for Japanese, once a week.'
  },
  { id: 'inv-18', topic: 'invitation', title: 'Graduation Party',
    questions: ['Where?', 'When?', 'Any dress code?'],
    vocab: ['celebration', 'milestone', 'RSVP', 'toast'],
    example: 'Join our graduation party this Sunday evening at the community hall.'
  },
];

export function getCardsByTopic(topicKey) {
  return cards.filter(c => c.topic === topicKey);
}

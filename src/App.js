import React, { useState, useEffect } from 'react';
import ProfileCard from './components/ProfileCard';
import SearchBar from './components/SearchBar';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

const indianNames = [
  'Aarav Sharma', 'Vivaan Patel', 'Aditya Singh', 'Vihaan Reddy', 'Arjun Mehra', 'Sai Kumar', 'Reyansh Gupta', 'Ayaan Joshi', 'Krishna Nair', 'Ishaan Das',
  'Dhruv Bhatia', 'Kabir Sethi', 'Rudra Choudhary', 'Anaya Kapoor', 'Aadhya Jain', 'Siya Agarwal', 'Pari Verma', 'Myra Malhotra', 'Aarohi Pillai', 'Anika Rao',
  'Ira Menon', 'Saanvi Iyer', 'Navya Shetty', 'Aanya Dutta', 'Ishita Ghosh', 'Prisha Bhatt', 'Riya Deshmukh', 'Aarav Tripathi', 'Advait Yadav', 'Atharv Chauhan',
  'Arnav Sinha', 'Lakshya Goel', 'Aryan Mittal', 'Kabir Anand', 'Yuvraj Tiwari', 'Omkar Kulkarni', 'Shaurya Pandey', 'Vihaan Jha', 'Aarush Pathak', 'Ayaan Sengupta',
  'Aarav Chatterjee', 'Vivaan Bhattacharya', 'Aditya Banerjee', 'Vihaan Mukherjee', 'Arjun Ghoshal', 'Sai Chakraborty', 'Reyansh Basu', 'Ayaan Dey', 'Krishna Sen', 'Ishaan Roy',
  'Dhruv Paul', 'Kabir Dasgupta', 'Rudra Saha', 'Anaya Bose', 'Aadhya Ghosh', 'Siya Choudhury', 'Pari Sarker', 'Myra Biswas', 'Aarohi Mondal', 'Anika Ghosh',
  'Ira Saha', 'Saanvi Dutta', 'Navya Pal', 'Aanya Ghosh', 'Ishita Saha', 'Prisha Das', 'Riya Ghosh', 'Aarav Saha', 'Advait Ghosh', 'Atharv Saha',
  'Arnav Ghosh', 'Lakshya Saha', 'Aryan Ghosh', 'Kabir Saha', 'Yuvraj Ghosh', 'Omkar Saha', 'Shaurya Ghosh', 'Vihaan Saha', 'Aarush Ghosh', 'Ayaan Ghosh',
  'Aarav Iyer', 'Vivaan Iyer', 'Aditya Iyer', 'Vihaan Iyer', 'Arjun Iyer', 'Sai Iyer', 'Reyansh Iyer', 'Ayaan Iyer', 'Krishna Iyer', 'Ishaan Iyer',
  'Dhruv Iyer', 'Kabir Iyer', 'Rudra Iyer', 'Anaya Iyer', 'Aadhya Iyer', 'Siya Iyer', 'Pari Iyer', 'Myra Iyer', 'Aarohi Iyer', 'Anika Iyer'
];

const roles = [
  'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'UI/UX Designer', 'Project Manager', 'QA Engineer', 'DevOps Engineer', 'Support Engineer', 'Mobile Developer', 'Data Scientist'
];

const descriptions = [
  'Passionate about building scalable apps.',
  'Loves clean code and good design.',
  'Enjoys working with React and Tailwind.',
  'Believes in teamwork and collaboration.',
  'Always eager to learn new technologies.',
  'Focuses on user experience and accessibility.',
  'Automates everything possible.',
  'Ensures quality and reliability.',
  'Helps users succeed.',
  'Enjoys solving complex problems.'
];

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Generate 40 mock Indian user profiles
    const mockUsers = Array.from({ length: 40 }, (_, i) => ({
      id: i + 1,
      name: indianNames[i % indianNames.length],
      role: roles[i % roles.length],
      description: descriptions[i % descriptions.length],
      image: `https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${(i % 50) + 1}.jpg`,
      email: `user${i + 1}@example.com`,
      linkedin: `https://linkedin.com/in/user${i + 1}`,
      github: `https://github.com/user${i + 1}`
    }));
    setUsers(mockUsers);
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">User Profiles</h1>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} darkMode={darkMode} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredUsers.map(user => (
            <ProfileCard key={user.id} user={user} darkMode={darkMode} />
          ))}
        </div>
      </div>
      <footer className="mt-12 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} - Shreekant Sunil Lohagale
      </footer>
    </div>
  );
};

export default App;

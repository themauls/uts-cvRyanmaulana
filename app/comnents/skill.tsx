export default function SkillsSection() {
    const skills = [
      { name: "menggambar", level: 90 },
      { name: "microsoft office", level: 70 },
      { name: "desain", level: 85 },
      { name: "public speaking", level: 85 },

    ];
  
    return (
      <div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-black font-bold text-2xl mb-5">Skills</h2>
        <div className="flex flex-col items-center space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="w-1/2">
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <span className="text-gray-700 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-indigo-600 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
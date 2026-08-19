import React, { useState } from 'react';
import { Calculator, Apple, Flame, Dumbbell, Sparkles, MessageCircle, ChevronRight, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

interface FitnessCalculatorProps {
  onOpenPassModal: (serviceInterest?: string) => void;
}

export const FitnessCalculator: React.FC<FitnessCalculatorProps> = ({ onOpenPassModal }) => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(24);
  const [weight, setWeight] = useState<number>(72);
  const [height, setHeight] = useState<number>(175);
  const [goal, setGoal] = useState<'fat_loss' | 'muscle_gain' | 'recomp'>('muscle_gain');
  const [dietType, setDietType] = useState<'veg' | 'eggetarian' | 'non_veg'>('veg');

  // Calculations
  // BMR using Mifflin-St Jeor Formula
  const bmr = gender === 'male' 
    ? (10 * weight) + (6.25 * height) - (5 * age) + 5
    : (10 * weight) + (6.25 * height) - (5 * age) - 161;

  // Assuming moderate gym activity at Old Skoool (multiplier 1.45)
  const tdee = Math.round(bmr * 1.45);

  let targetCalories = tdee;
  if (goal === 'fat_loss') targetCalories = Math.round(tdee - 450);
  if (goal === 'muscle_gain') targetCalories = Math.round(tdee + 350);

  // Target Protein (1.8g - 2.2g per kg)
  const proteinGrams = Math.round(weight * 2.0);
  const fatGrams = Math.round((targetCalories * 0.25) / 9);
  const carbGrams = Math.round((targetCalories - (proteinGrams * 4) - (fatGrams * 9)) / 4);

  // BMI
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  const getBmiCategory = (val: number) => {
    if (val < 18.5) return { text: 'Underweight', color: 'text-amber-400' };
    if (val < 24.9) return { text: 'Optimal Normal', color: 'text-[#F27D26]' };
    if (val < 29.9) return { text: 'Overweight', color: 'text-amber-400' };
    return { text: 'High Mass', color: 'text-rose-400' };
  };

  const getRecommendedSplit = () => {
    if (goal === 'fat_loss') return 'HIIT Cardio + Aerobics + Upper/Lower Iron Split (5 Days/wk)';
    if (goal === 'muscle_gain') return 'Push - Pull - Legs Heavy Hypertrophy + Progressive Overload (6 Days/wk)';
    return 'Functional Strength + Dance Agility + Core Conditioning (5 Days/wk)';
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Diet Consultant at Old Skoool Gym! I calculated my macros on your website:\n` +
    `• Weight: ${weight}kg, Height: ${height}cm, Age: ${age}\n` +
    `• Goal: ${goal.replace('_', ' ').toUpperCase()}\n` +
    `• Diet: ${dietType.toUpperCase()}\n` +
    `• Target: ${targetCalories} kcal (Protein: ${proteinGrams}g, Carbs: ${carbGrams}g, Fats: ${fatGrams}g)\n` +
    `I would like to book a complete personalized diet consultation & gym trial.`
  );

  return (
    <section id="macro-calc" className="py-20 px-4 sm:px-8 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 text-[#F27D26] text-xs font-bold tracking-[0.3em] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-[#F27D26]"></span>
            <span>Nutrition & Macro Bio-Engine</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-display">
            Diet & Macro Calculator
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-2 font-light max-w-xl">
            Precision daily caloric requirement, macro distribution, and training protocol curated for Old Skoool Gym members.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Panel */}
          <div className="lg:col-span-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            <div className="space-y-6">
              
              {/* Gender and Goal */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/60 mb-2 block">Gender</label>
                  <div className="grid grid-cols-2 gap-1 bg-black/40 p-1 rounded-full border border-white/10">
                    <button
                      type="button"
                      onClick={() => setGender('male')}
                      className={`py-2 text-xs font-bold rounded-full uppercase tracking-wider transition-all ${
                        gender === 'male' ? 'bg-white text-black' : 'text-white/50 hover:text-white'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('female')}
                      className={`py-2 text-xs font-bold rounded-full uppercase tracking-wider transition-all ${
                        gender === 'female' ? 'bg-white text-black' : 'text-white/50 hover:text-white'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/60 mb-2 block">Diet Type</label>
                  <div className="grid grid-cols-3 gap-1 bg-black/40 p-1 rounded-full border border-white/10">
                    <button
                      type="button"
                      onClick={() => setDietType('veg')}
                      className={`py-2 text-[10px] font-bold rounded-full uppercase transition-all ${
                        dietType === 'veg' ? 'bg-[#F27D26] text-white' : 'text-white/50'
                      }`}
                    >
                      Veg
                    </button>
                    <button
                      type="button"
                      onClick={() => setDietType('eggetarian')}
                      className={`py-2 text-[10px] font-bold rounded-full uppercase transition-all ${
                        dietType === 'eggetarian' ? 'bg-[#F27D26] text-white' : 'text-white/50'
                      }`}
                    >
                      Egg
                    </button>
                    <button
                      type="button"
                      onClick={() => setDietType('non_veg')}
                      className={`py-2 text-[10px] font-bold rounded-full uppercase transition-all ${
                        dietType === 'non_veg' ? 'bg-[#F27D26] text-white' : 'text-white/50'
                      }`}
                    >
                      Non-Veg
                    </button>
                  </div>
                </div>
              </div>

              {/* Sliders for Age, Weight, Height */}
              <div className="space-y-5">
                
                {/* Weight */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-white mb-2">
                    <span className="uppercase tracking-widest text-[10px] text-white/60">Body Weight</span>
                    <span className="font-mono text-[#F27D26] text-sm">{weight} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="140"
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    className="w-full accent-[#F27D26] bg-white/10 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/30 font-mono mt-1">
                    <span>40 kg</span>
                    <span>90 kg</span>
                    <span>140 kg</span>
                  </div>
                </div>

                {/* Height */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-white mb-2">
                    <span className="uppercase tracking-widest text-[10px] text-white/60">Height</span>
                    <span className="font-mono text-[#F27D26] text-sm">{height} cm ({Math.floor(height / 30.48)}' {Math.round((height % 30.48) / 2.54)}")</span>
                  </div>
                  <input
                    type="range"
                    min="140"
                    max="210"
                    value={height}
                    onChange={(e) => setHeight(parseInt(e.target.value))}
                    className="w-full accent-[#F27D26] bg-white/10 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/30 font-mono mt-1">
                    <span>140 cm</span>
                    <span>175 cm</span>
                    <span>210 cm</span>
                  </div>
                </div>

                {/* Age */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-white mb-2">
                    <span className="uppercase tracking-widest text-[10px] text-white/60">Age</span>
                    <span className="font-mono text-[#F27D26] text-sm">{age} years</span>
                  </div>
                  <input
                    type="range"
                    min="14"
                    max="75"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    className="w-full accent-[#F27D26] bg-white/10 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-white/30 font-mono mt-1">
                    <span>14 yrs</span>
                    <span>45 yrs</span>
                    <span>75 yrs</span>
                  </div>
                </div>

              </div>

              {/* Transformation Target */}
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/60 mb-2.5 block">Primary Goal</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setGoal('fat_loss')}
                    className={`p-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex flex-col items-center gap-1.5 ${
                      goal === 'fat_loss' ? 'bg-[#F27D26] text-white' : 'bg-white/5 text-white/60 hover:text-white border border-white/5'
                    }`}
                  >
                    <Flame className="w-4 h-4" />
                    <span>Fat Loss</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('muscle_gain')}
                    className={`p-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex flex-col items-center gap-1.5 ${
                      goal === 'muscle_gain' ? 'bg-[#F27D26] text-white' : 'bg-white/5 text-white/60 hover:text-white border border-white/5'
                    }`}
                  >
                    <Dumbbell className="w-4 h-4" />
                    <span>Muscle</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('recomp')}
                    className={`p-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex flex-col items-center gap-1.5 ${
                      goal === 'recomp' ? 'bg-[#F27D26] text-white' : 'bg-white/5 text-white/60 hover:text-white border border-white/5'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Recomp</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Results Output & Diet Consultation Preview */}
          <div className="lg:col-span-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            
            <div>
              {/* Daily Calorie Target Display */}
              <div className="bg-[#0c0c0e] p-6 rounded-3xl border border-white/10 mb-6 text-center relative overflow-hidden">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#F27D26] font-bold mb-2">
                  Target Daily Caloric Intake
                </div>
                <div className="text-5xl sm:text-6xl font-black text-white font-display tracking-tight">
                  {targetCalories} <span className="text-lg font-light text-white/60">kcal/day</span>
                </div>
                
                <div className="mt-4 flex items-center justify-center gap-4 text-xs font-medium text-white/60">
                  <span>BMI: <strong className="text-white">{bmi}</strong> ({getBmiCategory(parseFloat(bmi)).text})</span>
                  <span>·</span>
                  <span>Maintenance (TDEE): <strong className="text-white">{tdee} kcal</strong></span>
                </div>
              </div>

              {/* 3 Macro Rings Breakdown */}
              <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                
                {/* Protein */}
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <div className="text-[10px] font-mono text-[#F27D26] font-bold uppercase tracking-wider">Protein</div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-display mt-1">
                    {proteinGrams}g
                  </div>
                  <div className="text-[9px] text-white/50 mt-1 uppercase">
                    {dietType === 'veg' ? 'Paneer, Soya, Whey' : 'Eggs, Chicken, Fish'}
                  </div>
                </div>

                {/* Carbs */}
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <div className="text-[10px] font-mono text-white/70 font-bold uppercase tracking-wider">Carbs</div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-display mt-1">
                    {carbGrams}g
                  </div>
                  <div className="text-[9px] text-white/50 mt-1 uppercase">Oats, Roti, Rice, Fruits</div>
                </div>

                {/* Fats */}
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <div className="text-[10px] font-mono text-white/70 font-bold uppercase tracking-wider">Fats</div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-display mt-1">
                    {fatGrams}g
                  </div>
                  <div className="text-[9px] text-white/50 mt-1 uppercase">Almonds, Desi Ghee</div>
                </div>

              </div>

              {/* Recommended Old Skoool Split */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl mb-6 text-left">
                <div className="text-[10px] font-mono uppercase text-[#F27D26] font-bold mb-1.5 flex items-center gap-1.5">
                  <Dumbbell className="w-3.5 h-3.5" />
                  <span>Recommended Workout Architecture</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                  {getRecommendedSplit()}
                </div>
              </div>
            </div>

            {/* Direct Connect to Diet Consultant */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <a
                id="send-diet-whatsapp"
                href={`https://wa.me/${GYM_DETAILS.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 bg-[#F27D26] hover:bg-[#d96816] text-white py-3.5 px-5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(242,125,38,0.3)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send to Diet Consultant</span>
              </a>

              <button
                id="book-diet-consult-btn"
                onClick={() => onOpenPassModal('Diet & Nutrition Consultation')}
                className="w-full sm:w-auto editorial-btn-glass py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-white"
              >
                In-Person Consultation
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

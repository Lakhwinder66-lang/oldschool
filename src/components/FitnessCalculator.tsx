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
    if (val < 18.5) return { text: 'Underweight', color: 'text-amber-600' };
    if (val < 24.9) return { text: 'Optimal Normal', color: 'text-red-600' };
    if (val < 29.9) return { text: 'Overweight', color: 'text-amber-600' };
    return { text: 'High Mass', color: 'text-rose-600' };
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
    <section id="macro-calc" className="py-20 px-4 sm:px-8 md:px-12 relative bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 text-red-600 text-xs font-bold tracking-[0.3em] uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            <span>Nutrition & Macro Bio-Engine</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-zinc-900 uppercase tracking-tight font-display">
            Diet & Macro Calculator
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 font-light max-w-xl">
            Precision daily caloric requirement, macro distribution, and training protocol curated for Old Skoool Gym members.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Panel */}
          <div className="lg:col-span-6 bg-white border border-zinc-200 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left">
            <div className="space-y-6">
              
              {/* Gender and Goal */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2 block">Gender</label>
                  <div className="grid grid-cols-2 gap-1 bg-zinc-100 p-1 rounded-full border border-zinc-200">
                    <button
                      type="button"
                      onClick={() => setGender('male')}
                      className={`py-2 text-xs font-bold rounded-full uppercase tracking-wider transition-all ${
                        gender === 'male' ? 'bg-red-600 text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('female')}
                      className={`py-2 text-xs font-bold rounded-full uppercase tracking-wider transition-all ${
                        gender === 'female' ? 'bg-red-600 text-white shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      Female
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2 block">Diet Type</label>
                  <div className="grid grid-cols-3 gap-1 bg-zinc-100 p-1 rounded-full border border-zinc-200">
                    <button
                      type="button"
                      onClick={() => setDietType('veg')}
                      className={`py-2 text-[10px] font-bold rounded-full uppercase transition-all ${
                        dietType === 'veg' ? 'bg-red-600 text-white' : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      Veg
                    </button>
                    <button
                      type="button"
                      onClick={() => setDietType('eggetarian')}
                      className={`py-2 text-[10px] font-bold rounded-full uppercase transition-all ${
                        dietType === 'eggetarian' ? 'bg-red-600 text-white' : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      Egg
                    </button>
                    <button
                      type="button"
                      onClick={() => setDietType('non_veg')}
                      className={`py-2 text-[10px] font-bold rounded-full uppercase transition-all ${
                        dietType === 'non_veg' ? 'bg-red-600 text-white' : 'text-zinc-600 hover:text-zinc-900'
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
                  <div className="flex justify-between text-xs font-bold text-zinc-900 mb-2">
                    <span className="uppercase tracking-widest text-[10px] text-zinc-500">Body Weight</span>
                    <span className="font-mono text-red-600 text-sm">{weight} kg</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="140"
                    value={weight}
                    onChange={(e) => setWeight(parseInt(e.target.value))}
                    className="w-full accent-red-600 bg-zinc-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono mt-1">
                    <span>40 kg</span>
                    <span>90 kg</span>
                    <span>140 kg</span>
                  </div>
                </div>

                {/* Height */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-zinc-900 mb-2">
                    <span className="uppercase tracking-widest text-[10px] text-zinc-500">Height</span>
                    <span className="font-mono text-red-600 text-sm">{height} cm ({Math.floor(height / 30.48)}' {Math.round((height % 30.48) / 2.54)}")</span>
                  </div>
                  <input
                    type="range"
                    min="140"
                    max="210"
                    value={height}
                    onChange={(e) => setHeight(parseInt(e.target.value))}
                    className="w-full accent-red-600 bg-zinc-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono mt-1">
                    <span>140 cm</span>
                    <span>175 cm</span>
                    <span>210 cm</span>
                  </div>
                </div>

                {/* Age */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-zinc-900 mb-2">
                    <span className="uppercase tracking-widest text-[10px] text-zinc-500">Age</span>
                    <span className="font-mono text-red-600 text-sm">{age} years</span>
                  </div>
                  <input
                    type="range"
                    min="14"
                    max="75"
                    value={age}
                    onChange={(e) => setAge(parseInt(e.target.value))}
                    className="w-full accent-red-600 bg-zinc-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 font-mono mt-1">
                    <span>14 yrs</span>
                    <span>45 yrs</span>
                    <span>75 yrs</span>
                  </div>
                </div>

              </div>

              {/* Transformation Target */}
              <div>
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-2.5 block">Primary Goal</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setGoal('fat_loss')}
                    className={`p-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex flex-col items-center gap-1.5 ${
                      goal === 'fat_loss' ? 'bg-red-600 text-white shadow-sm' : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200'
                    }`}
                  >
                    <Flame className="w-4 h-4" />
                    <span>Fat Loss</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('muscle_gain')}
                    className={`p-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex flex-col items-center gap-1.5 ${
                      goal === 'muscle_gain' ? 'bg-red-600 text-white shadow-sm' : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200'
                    }`}
                  >
                    <Dumbbell className="w-4 h-4" />
                    <span>Muscle</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setGoal('recomp')}
                    className={`p-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all flex flex-col items-center gap-1.5 ${
                      goal === 'recomp' ? 'bg-red-600 text-white shadow-sm' : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200'
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
          <div className="lg:col-span-6 bg-white border border-zinc-200 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.05)] text-left">
            
            <div>
              {/* Daily Calorie Target Display */}
              <div className="bg-zinc-900 text-white p-6 rounded-3xl mb-6 text-center relative overflow-hidden">
                <div className="text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold mb-2">
                  Target Daily Caloric Intake
                </div>
                <div className="text-5xl sm:text-6xl font-black text-white font-display tracking-tight">
                  {targetCalories} <span className="text-lg font-light text-zinc-400">kcal/day</span>
                </div>
                
                <div className="mt-4 flex items-center justify-center gap-4 text-xs font-medium text-zinc-400">
                  <span>BMI: <strong className="text-white">{bmi}</strong> ({getBmiCategory(parseFloat(bmi)).text})</span>
                  <span>·</span>
                  <span>Maintenance (TDEE): <strong className="text-white">{tdee} kcal</strong></span>
                </div>
              </div>

              {/* 3 Macro Rings Breakdown */}
              <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                
                {/* Protein */}
                <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl">
                  <div className="text-[10px] font-mono text-red-600 font-bold uppercase tracking-wider">Protein</div>
                  <div className="text-2xl sm:text-3xl font-black text-zinc-900 font-display mt-1">
                    {proteinGrams}g
                  </div>
                  <div className="text-[9px] text-zinc-500 mt-1 uppercase">
                    {dietType === 'veg' ? 'Paneer, Soya, Whey' : 'Eggs, Chicken, Fish'}
                  </div>
                </div>

                {/* Carbs */}
                <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl">
                  <div className="text-[10px] font-mono text-zinc-700 font-bold uppercase tracking-wider">Carbs</div>
                  <div className="text-2xl sm:text-3xl font-black text-zinc-900 font-display mt-1">
                    {carbGrams}g
                  </div>
                  <div className="text-[9px] text-zinc-500 mt-1 uppercase">Oats, Roti, Rice, Fruits</div>
                </div>

                {/* Fats */}
                <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-2xl">
                  <div className="text-[10px] font-mono text-zinc-700 font-bold uppercase tracking-wider">Fats</div>
                  <div className="text-2xl sm:text-3xl font-black text-zinc-900 font-display mt-1">
                    {fatGrams}g
                  </div>
                  <div className="text-[9px] text-zinc-500 mt-1 uppercase">Almonds, Desi Ghee</div>
                </div>

              </div>

              {/* Recommended Old Skoool Split */}
              <div className="bg-zinc-50 border border-zinc-200 p-5 rounded-2xl mb-6 text-left">
                <div className="text-[10px] font-mono uppercase text-red-600 font-bold mb-1.5 flex items-center gap-1.5">
                  <Dumbbell className="w-3.5 h-3.5" />
                  <span>Recommended Workout Architecture</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-zinc-800 leading-relaxed">
                  {getRecommendedSplit()}
                </div>
              </div>
            </div>

            {/* Direct Connect to Diet Consultant */}
            <div className="pt-5 border-t border-zinc-200 space-y-3">
              <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 text-left">
                Send to Certified Nutritionist (Owners):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  id="send-diet-anjali"
                  href={`https://wa.me/917087285367?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-100 hover:bg-red-600 hover:text-white text-zinc-800 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-zinc-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Anjali (70872-85367)</span>
                </a>

                <a
                  id="send-diet-satnam"
                  href={`https://wa.me/918544834372?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-100 hover:bg-red-600 hover:text-white text-zinc-800 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all border border-zinc-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Satnam Singh (8544834372)</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

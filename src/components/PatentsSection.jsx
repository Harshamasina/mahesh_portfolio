import { Award, Dna, FlaskConical, Microscope, Target, CheckCircle2, TrendingUp, ExternalLink, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, Cell } from "recharts";
import { useState, useEffect } from "react";

const PatentsSection = () => {
  const [axisColor, setAxisColor] = useState("");

  useEffect(() => {
    const updateAxisColor = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setAxisColor(isDark ? '#ffffff' : '#1a1a1a');
    };

    updateAxisColor();

    const observer = new MutationObserver(updateAxisColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);
  const chartData = [
    { year: "2012", filed: 14, granted: 1 },
    { year: "2013", filed: 177, granted: 1 },
    { year: "2014", filed: 139, granted: 1 },
    { year: "2015", filed: 33, granted: 12 },
    { year: "2016", filed: 17, granted: 48 },
    { year: "2017", filed: 101, granted: 12 },
    { year: "2018", filed: 33, granted: 10 },
    { year: "2019", filed: 91, granted: 8 },
    { year: "2020", filed: 37, granted: 26 },
    { year: "2021", filed: 83, granted: 37 },
    { year: "2022", filed: 39, granted: 55 },
    { year: "2023", filed: 5, granted: 16 },
  ];

  const countryData = [
    { country: "USA", patents: 125 },
    { country: "India", patents: 63 },
    { country: "Singapore", patents: 62 },
    { country: "Australia", patents: 52 },
    { country: "Europe", patents: 51 },
    { country: "Canada", patents: 50 },
    { country: "Japan", patents: 48 },
    { country: "China", patents: 33 },
    { country: "South Africa", patents: 32 },
    { country: "Israel", patents: 26 },
    { country: "South Korea", patents: 23 },
    { country: "Brazil", patents: 21 },
    { country: "Mexico", patents: 15 },
    { country: "Russia", patents: 15 },
    { country: "New Zealand", patents: 13 },
    { country: "Spain", patents: 4 },
    { country: "Denmark", patents: 2 },
  ];


  return (
    <section id="patents" className="section" aria-labelledby="patents-heading">
      <div className="section-container">
        <h2 id="patents-heading" className="section-title">
          <Award className="icon-lg" aria-hidden="true" />
          Patents
        </h2>
        <p className="section-subtitle">
          Extensive intellectual property portfolio covering novel drug molecules and therapeutic approaches. Multiple granted patents in cancer treatment, pain management, diabetes, neurodegenerative diseases, and metabolic disorders.
        </p>
        
        <div className="glass-card p-6 mb-12 animate-fade-in">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <TrendingUp className="icon-sm text-primary" />
            Patent Filing & Grant Trends
          </h3>
          <div className="chart-wrapper" style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={chartData} 
                margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="hsl(var(--border))" 
                  opacity={0.3}
                />
                <XAxis 
                  dataKey="year" 
                  stroke={axisColor}
                  tick={{ fill: axisColor, fontSize: 12 }}
                  tickLine={{ stroke: "hsl(var(--border))" }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                />
                <YAxis 
                  stroke={axisColor}
                  tick={{ fill: axisColor, fontSize: 12 }}
                  tickLine={{ stroke: "hsl(var(--border))" }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '12px',
                    color: 'hsl(var(--foreground))',
                    padding: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                  labelStyle={{
                    color: 'hsl(var(--primary))',
                    fontWeight: 'bold',
                    marginBottom: '8px'
                  }}
                />
                <Legend 
                  wrapperStyle={{
                    paddingTop: '20px',
                    fontSize: '14px'
                  }}
                  iconType="line"
                  iconSize={20}
                />
                <Line 
                  type="monotone" 
                  dataKey="filed" 
                  name="Applications Filed"
                  stroke="#3b82f6"
                  strokeWidth={4}
                  dot={{ 
                    fill: "#3b82f6", 
                    strokeWidth: 2,
                    r: 6,
                    stroke: "#ffffff"
                  }}
                  activeDot={{ 
                    r: 9,
                    fill: "#3b82f6",
                    stroke: "#ffffff",
                    strokeWidth: 3
                  }}
                  animationDuration={1500}
                  animationEasing="ease-in-out"
                />
                <Line 
                  type="monotone" 
                  dataKey="granted" 
                  name="Patents Granted"
                  stroke="#60a5fa"
                  strokeWidth={4}
                  dot={{ 
                    fill: "#60a5fa", 
                    strokeWidth: 2,
                    r: 6,
                    stroke: "#ffffff"
                  }}
                  activeDot={{ 
                    r: 9,
                    fill: "#60a5fa",
                    stroke: "#ffffff",
                    strokeWidth: 3
                  }}
                  animationDuration={1500}
                  animationEasing="ease-in-out"
                  animationBegin={200}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6 mb-12 animate-fade-in mt-8">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Globe className="icon-sm text-primary" />
            Countries in which Mahesh Kandula Filed Patents
          </h3>
          <div className="chart-wrapper" style={{ width: '100%', height: 500 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={countryData} 
                margin={{ top: 10, right: 30, left: 20, bottom: 80 }}
              >
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="hsl(var(--border))" 
                  opacity={0.3}
                />
                <XAxis 
                  dataKey="country" 
                  stroke={axisColor}
                  tick={{ fill: axisColor, fontSize: 11 }}
                  tickLine={{ stroke: "hsl(var(--border))" }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  stroke={axisColor}
                  tick={{ fill: axisColor, fontSize: 12 }}
                  tickLine={{ stroke: "hsl(var(--border))" }}
                  axisLine={{ stroke: "hsl(var(--border))" }}
                  label={{ value: 'Number of Patents', angle: -90, position: 'insideLeft', fill: axisColor }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '12px',
                    color: 'hsl(var(--foreground))',
                    padding: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                  labelStyle={{
                    color: 'hsl(var(--primary))',
                    fontWeight: 'bold',
                    marginBottom: '8px'
                  }}
                  cursor={false}
                />
                <Bar 
                  dataKey="patents" 
                  fill="#3b82f6"
                  radius={[8, 8, 0, 0]}
                  animationDuration={1500}
                  animationEasing="ease-in-out"
                >
                  {countryData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index % 2 === 0 ? "#3b82f6" : "#60a5fa"} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex justify-center mb-8 patent_button">
          <a href="https://insights.greyb.com/mahesh-kandula-patents/" target="_blank" rel="noopener noreferrer" aria-label="View all stats by Mahesh Kandula on GreyB">
            View More Stats
          </a>
        </div>

        <div className="patents-grid">
          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Dna className="icon-sm flex-shrink-0 text-primary" />
              2,6 Xylidine Derivatives for the Treatment of Pain
            </h3>
            <div className="patent-number">US20120022147</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <FlaskConical className="icon-sm flex-shrink-0 text-primary" />
              4,6 -Dibenzoylamino-2-Methyl-Pyrimidine Derivatives for Cancer Treatment
            </h3>
            <div className="patent-number">US WO/2011/154846A3</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Target className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for the Treatment of Atherothrombosis
            </h3>
            <div className="patent-number">US PCT/IB2012/053673</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Dna className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for the Treatment of Cancer
            </h3>
            <div className="patent-number">US PCT/IB2012/053650</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <FlaskConical className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for Metabolic Conditions & Muscular Disorders
            </h3>
            <div className="patent-number">US PCT/IB2012/053509</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Target className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for Neuromuscular & Neurodegenerative Diseases
            </h3>
            <div className="patent-number">US PCT/IB2012/053555</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Dna className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for the Treatment of Parkinson's Disease
            </h3>
            <div className="patent-number">US PCT/IB2012/054101</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <FlaskConical className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for Treating Diabetes
            </h3>
            <div className="patent-number">US PCT/US2009/063997</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Target className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for Treating Diabetic Ulcers
            </h3>
            <div className="patent-number">US PCT/US2009/002831</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Dna className="icon-sm flex-shrink-0 text-primary" />
              Compositions and Methods for Treating NOS-Associated Diseases
            </h3>
            <div className="patent-number">US20110213021</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <FlaskConical className="icon-sm flex-shrink-0 text-primary" />
              Compound and Composition and Their Uses Thereof
            </h3>
            <div className="patent-number">US20110218235</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Target className="icon-sm flex-shrink-0 text-primary" />
              Compound and Method for the Treatment of Pain
            </h3>
            <div className="patent-number">US20110237658</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Dna className="icon-sm flex-shrink-0 text-primary" />
              Compound, Composition and Uses Thereof
            </h3>
            <div className="patent-number">US20110300190</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <FlaskConical className="icon-sm flex-shrink-0 text-primary" />
              Compounds & Compositions for Copper Retention Diseases
            </h3>
            <div className="patent-number">WO/2011/107870A3</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Target className="icon-sm flex-shrink-0 text-primary" />
              Cysteamine Derivatives in the Treatment of NASH
            </h3>
            <div className="patent-number">US PCT/IB2011/001550</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Dna className="icon-sm flex-shrink-0 text-primary" />
              Prognosis and Treatment Using Portfolio of Genes
            </h3>
            <div className="patent-number">US WO20212070056</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <FlaskConical className="icon-sm flex-shrink-0 text-primary" />
              Prodrugs of GABA Analogs
            </h3>
            <div className="patent-number">US PCT/IB2012/053529</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>

          <div className="glass-card patent-card stagger-item">
            <h3 className="patent-title">
              <Target className="icon-sm flex-shrink-0 text-primary" />
              Production of R-α-Lipoic Acid by Fermentation
            </h3>
            <div className="patent-number">US20110262976</div>
            <span className="patent-status">
              <CheckCircle2 className="icon-sm" /> Granted
            </span>
          </div>
        </div>

        <div className="flex justify-center mb-8 patent_button">
          <a href="https://patents.justia.com/inventor/mahesh-kandula" target="_blank" rel="noopener noreferrer" aria-label="View all patents by Mahesh Kandula on Justia">
            View All Patents
          </a>
        </div>
      </div>
    </section>
  );
};

export default PatentsSection;

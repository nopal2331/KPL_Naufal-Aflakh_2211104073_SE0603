using System;
using System.Windows.Forms;

namespace Modul12App
{
    public class MainForm : Form
    {
        private TextBox textBoxA;
        private TextBox textBoxB;
        private Button button;
        private Label label;

        public MainForm()
        {
            // Initialize components
            textBoxA = new TextBox() { Location = new System.Drawing.Point(20, 20) };
            textBoxB = new TextBox() { Location = new System.Drawing.Point(20, 60) };
            button = new Button() { Text = "Hitung", Location = new System.Drawing.Point(20, 100) };
            label = new Label() { Location = new System.Drawing.Point(20, 140), Width = 200 };

            button.Click += new EventHandler(Button_Click);

            Controls.Add(textBoxA);
            Controls.Add(textBoxB);
            Controls.Add(button);
            Controls.Add(label);
        }

        private void Button_Click(object sender, EventArgs e)
        {
            int a = Convert.ToInt32(textBoxA.Text);
            int b = Convert.ToInt32(textBoxB.Text);
            int result = CariNilaiPangkat(a, b);
            label.Text = "Hasil Pangkat: " + result.ToString();
        }

        public int CariNilaiPangkat(int a, int b)
        {
            // Aturan jika b == 0
            if (b == 0) return 1;

            // Aturan jika b negatif
            if (b < 0) return -1;

            // Aturan jika a > 100 atau b > 10
            // Dalam hal ini, overflow mungkin terjadi
            if (a > 100 || b > 10) return -2;

            int result = 1;
            for (int i = 0; i < b; i++)
            {
                // Mengecek apakah perkalian berikutnya menyebabkan overflow
                if (result > int.MaxValue / a)
                {
                    return -3; // Overflow
                }

                result *= a;
            }

            return result;
        }


        [STAThread]
        public static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new MainForm());
        }
    }
}

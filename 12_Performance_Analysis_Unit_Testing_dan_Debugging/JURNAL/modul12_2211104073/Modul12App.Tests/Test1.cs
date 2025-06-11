using Microsoft.VisualStudio.TestTools.UnitTesting;
using Modul12App;  // Mengimpor namespace Modul12App untuk mengakses MainForm

namespace Modul12App.Tests
{
    [TestClass]
    public class MainFormTests
    {
        // Test untuk kasus a^b dengan bilangan positif
        [TestMethod]
        [DataRow(2, 3, 8)]  // 2^3 = 8
        [DataRow(3, 2, 9)]  // 3^2 = 9
        public void TestCariNilaiPangkat_Positive(int a, int b, int expected)
        {
            var form = new MainForm();
            var result = form.CariNilaiPangkat(a, b);
            Assert.AreEqual(expected, result);
        }

        // Test untuk kasus b = 0
        [TestMethod]
        [DataRow(5, 0, 1)]  // 5^0 = 1
        public void TestCariNilaiPangkat_BerapaBawah(int a, int b, int expected)
        {
            var form = new MainForm();
            var result = form.CariNilaiPangkat(a, b);
            Assert.AreEqual(expected, result);
        }

        // Test untuk kasus b negatif
        [TestMethod]
        [DataRow(4, -2, -1)]  // b negatif menghasilkan -1
        public void TestCariNilaiPangkat_BNegatif(int a, int b, int expected)
        {
            var form = new MainForm();
            var result = form.CariNilaiPangkat(a, b);
            Assert.AreEqual(expected, result);
        }

        // Test untuk kasus a > 100 atau b > 10
        [TestMethod]
        [DataRow(150, 5, -2)]  // a > 100 menghasilkan -2
        [DataRow(3, 12, -2)]   // b > 10 menghasilkan -2
        public void TestCariNilaiPangkat_A_Atau_BLebihBesar(int a, int b, int expected)
        {
            var form = new MainForm();
            var result = form.CariNilaiPangkat(a, b);
            Assert.AreEqual(expected, result);
        }

        // Test untuk overflow
        [TestMethod]
        [DataRow(1000, 100, -3)]  // Terjadi overflow
        public void TestCariNilaiPangkat_Overflow(int a, int b, int expected)
        {
            var form = new MainForm();
            var result = form.CariNilaiPangkat(a, b);
            Assert.AreEqual(expected, result);
        }
    }
}

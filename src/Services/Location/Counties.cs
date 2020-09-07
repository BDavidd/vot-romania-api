﻿using System.Collections.Generic;

namespace VotRomania.Services.Location
{
    public class Counties
    {
        private static readonly Dictionary<string, string> CountiesList = new Dictionary<string, string>
        {
            {"AB", "Alba"},
            {"AR", "Arad"},
            {"AG", "Argeș"},
            {"BC", "Bacău"},
            {"BH", "Bihor"},
            {"BN", "Bistrița-Năsăud"},
            {"BT", "Botoșani"},
            {"BV", "Brașov"},
            {"BR", "Brăila"},
            {"B", "Bucharest"},
            {"BZ", "Buzău"},
            {"CS", "Caraș-Severin"},
            {"CL", "Călărași"},
            {"CJ", "Cluj"},
            {"CT", "Constanța"},
            {"CV", "Covasna"},
            {"DB", "Dâmbovița"},
            {"DJ", "Dolj"},
            {"GL", "Galați"},
            {"GR", "Giurgiu"},
            {"GJ", "Gorj"},
            {"HR", "Harghita"},
            {"HD", "Hunedoara"},
            {"IL", "Ialomița"},
            {"IS", "Iași"},
            {"IF", "Ilfov"},
            {"MM", "Maramureș"},
            {"MH", "Mehedinți"},
            {"MS", "Mureș"},
            {"NT", "Neamț"},
            {"OT", "Olt"},
            {"PH", "Prahova"},
            {"SM", "Satu Mare"},
            {"SJ", "Sălaj"},
            {"SB", "Sibiu"},
            {"SV", "Suceava"},
            {"TR", "Teleorman"},
            {"TM", "Timiș"},
            {"TL", "Tulcea"},
            {"VS", "Vaslui"},
            {"VL", "Vâlcea"},
            {"VN", "Vrancea"}
        };

        public static string GetByCode(string code)
        {
            if (CountiesList.ContainsKey(code.ToUpper().Trim()))
            {
                return CountiesList[code];
            }

            return code;
        }
    }
}
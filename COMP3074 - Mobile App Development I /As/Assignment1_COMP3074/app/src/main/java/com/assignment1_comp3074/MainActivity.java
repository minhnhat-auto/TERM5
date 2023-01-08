package com.assignment1_comp3074;

import androidx.appcompat.app.AppCompatActivity;


import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.material.floatingactionbutton.FloatingActionButton;

import java.text.DecimalFormat;

public class MainActivity extends AppCompatActivity {
    EditText e1, e2;
    TextView v1, v2;
    Button clear_btn, cal_btn;
    FloatingActionButton inf_btn;

    private static final DecimalFormat df = new DecimalFormat("0.00");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        cal_btn = findViewById(R.id.cal_btn);
        clear_btn = findViewById(R.id.clear_btn);
        inf_btn = findViewById(R.id.inf_btn);

        e1 = (EditText) findViewById(R.id.no_of_hours);
        e2 = (EditText) findViewById(R.id.hourly_rate);

        v1 = (TextView) findViewById(R.id.res_total_pay);
        v2 = (TextView) findViewById(R.id.res_tax);

        cal_btn.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {

                String s1 = e1.getText().toString();
                String s2 = e2.getText().toString();

                if (s1.isEmpty() || s2.isEmpty()) {
                    Toast.makeText(getApplicationContext(), "Enter Numbers", Toast.LENGTH_SHORT).show();
                } else {
                    double inp1 = Float.parseFloat(e1.getText().toString());
                    double inp2 = Float.parseFloat(e2.getText().toString());

                    if (inp1 < 40 || inp1 == 40) {
                        double total_payment = (inp1 * inp2);
                        double tax = Math.round(total_payment * 0.18);
                        String holder1 = df.format(total_payment);
                        v1.setText(holder1);
                        v2.setText(Double.toString(tax));
                    } else {
                        double total_payment = Math.round((inp1 - 40) * inp2 * 1.5 + 40 * inp2);
                        double tax = Math.round(total_payment * 0.18);
                        v1.setText(Double.toString(total_payment));
                        v2.setText(Double.toString(tax));
                    }
                }
            }
        });

        clear_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                e1.setText("");
                e2.setText("");
            }
        });

        inf_btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(getBaseContext(), AboutActivity.class);
                startActivity(intent);
            }
        });


    }
}
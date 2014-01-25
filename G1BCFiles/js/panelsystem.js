// G1BC Panel System
// By TheUberEpic
// GPL2

function changePanel(panelno)
{
	if (panelno == null) {
		$('#panel').load('G1BCFiles/panels/0.panel.html');
	} else {
		$('#panel').load('G1BCFiles/panels/' + panelno + '.panel.html');
	}
}